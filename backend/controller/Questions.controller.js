const { GoogleGenAI } = require("@google/genai");
const { asyncController } = require("../helper/asyncController");
const questionsModel = require("../model/questions.model");
const { apiResponse } = require("../helper/apiResponse");
const userModel = require("../model/user.model");

exports.addQuestionController = asyncController(async (req, res) => {
  const { jobPosition, jobDescription, jobExperience, email } = req.body;

  if (!jobPosition || !jobDescription || !jobExperience || !email) {
    return apiResponse(res, 400, "All fields are required");
  }

  // find user
  const user = await userModel.findOne({ email });

  if (!user) {
    return apiResponse(res, 404, "User not found");
  }

  const existingQues = await questionsModel.find({ userId: user._id });

  if (existingQues.length >= 3) {
    return apiResponse(res, 400, "You already genarated has 5 questions");
  } else {
    // init gemini
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    // prompt
    const prompt = `
Job Position: ${jobPosition}

Job Description:
${jobDescription}

Years of Experience:
${jobExperience}

Generate ${process.env.QUESTION_COUNT || 5} interview questions with answers.

Return ONLY valid JSON array.

Example:
[
  {
    "question": "What is React?",
    "answer": "React is a JavaScript library for building UI."
  }
]

Do not return markdown.
Do not use triple backticks.
Do not add explanation text.
`;

    let response;

    // generate AI response
    try {
      response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });
    } catch (err) {
      return apiResponse(res, 500, "AI generation failed", {
        error: err.message,
      });
    }

    // get text
    let text;

    try {
      text = response.text;

      if (!text) {
        return apiResponse(res, 500, "AI returned empty response");
      }
    } catch (err) {
      return apiResponse(res, 500, "Failed to read AI response", {
        error: err.message,
      });
    }

    // parse json
    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch (err) {
      return apiResponse(res, 500, "AI response parsing failed", {
        error: err.message,
        rawResponse: text,
      });
    }

    // save database
    let saved;

    try {
      saved = await questionsModel.create({
        userId: user._id,
        jobPosition,
        jobDescription,
        jobExperience,
        qaList: parsed,
      });
    } catch (err) {
      return apiResponse(res, 500, "Failed to save questions", {
        error: err.message,
      });
    }

    // success response
    apiResponse(res, 200, "Questions generated successfully", {
      questions: parsed,
      savedId: saved._id,
    });
  }
});

exports.getQuestionController = asyncController(async (req, res) => {
  const { email } = req.query;

  // validation
  if (!email) {
    return apiResponse(res, 400, "Email is required");
  }

  // find user
  const user = await userModel.findOne({ email });

  if (!user) {
    return apiResponse(res, 404, "User not found");
  }

  // find all questions of this user
  const questions = await questionsModel
    .find({ userId: user._id })
    .populate("feedback")
    .populate("userId")
    .sort({ createdAt: -1 });

  return apiResponse(res, 200, "Questions found successfully", questions);
});

exports.getSingleQuestionController = asyncController(async (req, res) => {
  const { id } = req.params;
  const question = await questionsModel
    .findById(id)
    .populate("feedback")
    .populate("userId");
  apiResponse(res, 200, "Question found successfully", question);
});
