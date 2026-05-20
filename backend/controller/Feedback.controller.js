const { apiResponse } = require("../helper/apiResponse");
const { asyncController } = require("../helper/asyncController");
const { GoogleGenAI } = require("@google/genai");

const feedbackModel = require("../model/feedback.model");
const userModel = require("../model/user.model");

exports.createFeedbackController = asyncController(async (req, res) => {

  const { currentQuestion, currentAnswer, userAnswer, email } = req.body;

  // validation
  if (!currentQuestion || !currentAnswer || !userAnswer || !email) {
    return apiResponse(res, 400, "All fields are required");
  }

  // find user
  const user = await userModel.findOne({ email });

  if (!user) {
    return apiResponse(res, 404, "User not found");
  }

  // init gemini
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  // optional safety trim
  const shortAnswer = userAnswer.slice(0, 3000);

  // prompt
   const prompt = `
    Question:${currentQuestion},
    User Answer:${userAnswer},
    Correct Answer:${currentAnswer}.

    Depend on question and user answer for give interview question.
    Please give us rating for answer and feedback as area of improvement
    in just 3 to 5 lines in JSON format with rating field and feedback field.

    Do not return markdown.
    Do not use triple backticks.
    Do not add explanation text.
    `;

  let parsed;

  // generate ai response
  try {

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    // get text safely
    let text =
      response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return apiResponse(res, 500, "AI returned empty response");
    }

    // clean response
    text = text.replace(/```json|```/g, "").trim();

    console.log("AI RESPONSE =>", text);

    // parse json
    parsed = JSON.parse(text);

  } catch (err) {

    console.log("GEMINI ERROR =>", err);

    return apiResponse(res, 500, "AI generation failed", {
      error: err.message,
    });
  }

  // save/update feedback
  let saved;

  try {

    saved = await feedbackModel.findOneAndUpdate(
      {
        userId: user._id,
        currentQuestion,
      },
      {
        $set: {
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

  } catch (err) {

    return apiResponse(res, 500, "Failed to save feedback", {
      error: err.message,
    });
  }

  return apiResponse(
    res,
    200,
    "Feedback saved successfully",
    saved
  );
});