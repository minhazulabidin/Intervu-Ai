const { apiResponse } = require("../helper/apiResponse");
const { asyncController } = require("../helper/asyncController");
const { GoogleGenAI } = require("@google/genai");

const feedbackModel = require("../model/feedback.model");
const userModel = require("../model/user.model");
const questionModel = require("../model/questions.model");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.createFeedbackController = asyncController(async (req, res) => {
  const { currentQuestion, currentAnswer, userAnswer, email } = req.body;

  // ========================
  // 1. VALIDATION
  // ========================
  if (!currentQuestion || !currentAnswer || !userAnswer || !email) {
    return apiResponse(res, 400, "All fields are required");
  }

  // ========================
  // 2. USER FIND
  // ========================
  const user = await userModel.findOne({ email });

  if (!user) {
    return apiResponse(res, 404, "User not found");
  }

  // ========================
  // 3. BETTER GEMINI PROMPT
  // ========================
  const prompt = `
You are an expert interview evaluator.

You will evaluate a candidate answer.

Return ONLY valid JSON in this format:

{
  "rating": number (0 to 10),
  "feedback": "short professional feedback (3-5 lines)"
}

Rules:
- Compare user answer with correct answer
- Be strict but fair
- Penalize missing key concepts
- Reward clarity and correctness
- Focus on technical accuracy and completeness
- No markdown, no explanation, no extra text

INPUT:

Question:
${currentQuestion}

Correct Answer:
${currentAnswer}

User Answer:
${userAnswer}
`;

  let parsed;

  // ========================
  // 4. GEMINI CALL
  // ========================
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    let text =
      response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return apiResponse(res, 500, "AI returned empty response");
    }

    text = text.replace(/```json|```/g, "").trim();

    parsed = JSON.parse(text);
  } catch (err) {
    return apiResponse(res, 500, "AI generation failed", {
      error: err.message,
    });
  }

  // ========================
  // 5. FEEDBACK UPSERT
  // ========================
  let feedbackDoc = await feedbackModel.findOne({
    userId: user._id,
    currentQuestion,
    currentAnswer,
  })

  try {
    if (!feedbackDoc) {
      feedbackDoc = await feedbackModel.create({
        userId: user._id,
        currentQuestion,
        currentAnswer,
        userAnswer,
        rating: parsed.rating,
        feedback: parsed.feedback,
      });

    } else {
      feedbackDoc = await feedbackModel.findOneAndUpdate(
        {
          userId: user._id,
          currentQuestion,
          currentAnswer,
        },
        {
          $set: {
            userId: user._id,
            currentQuestion,
            currentAnswer,
            userAnswer,
            rating: parsed.rating,
            feedback: parsed.feedback,
          },
        },
        {
          new: true,
          upsert: true,
        }
      );
    }
  } catch (err) {
    return apiResponse(res, 500, "Failed to save feedback", {
      error: err.message,
    });
  }

  // ========================
  // 6. PUSH INTO QUESTION MODEL
  // ========================
  try {
    await questionModel.updateOne(
      {
        userId: user._id,
        "qaList.question": currentQuestion,
      },
      {
        $addToSet: {
          feedback: feedbackDoc._id,
        },
      }
    );
  } catch (err) {
    return apiResponse(res, 500, "Failed to link feedback", {
      error: err.message,
    });
  }

  // ========================
  // 7. RESPONSE
  // ========================
  return apiResponse(res, 200, "Feedback generated successfully", {
    rating: parsed.rating,
    feedback: parsed.feedback,
    feedbackId: feedbackDoc._id,
  });
});