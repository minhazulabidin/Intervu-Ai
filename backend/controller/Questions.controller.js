const { GoogleGenAI } = require("@google/genai");
const { asyncController } = require("../helper/asyncController");
const questionsModel = require("../model/questions.model");
const { apiResponse } = require("../helper/apiResponse");
const userModel = require("../model/user.model");

exports.addQuestionController = asyncController(async (req, res) => {
  const { jobPosition, jobDescription, jobExperience, email } = req.body;

  // validation
  if (!jobPosition || !jobDescription || !jobExperience || !email) {
    throw new Error("All fields are required");
  }

  // find user
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

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
    console.log("GEMINI ERROR =>", err);

    throw new Error("AI generation failed");
  }

  // get text
  let text;

  try {
    text = response.text;
  } catch (err) {
    console.log("TEXT READ ERROR =>", err);

    throw new Error("Failed to read AI response");
  }

  // parse json
  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch (err) {
    console.log("JSON PARSE ERROR =>", err);
    console.log("INVALID JSON =>", text);

    throw new Error("AI response parsing failed");
  }

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
    console.log("DATABASE SAVE ERROR =>", err);

    throw new Error("Failed to save questions");
  }

  // response
  apiResponse(res, 200, "Questions generated successfully", {
    questions: parsed,
    savedId: saved._id,
  });
});

exports.getQuestionController = asyncController(async (req, res) => {
  const question = await questionsModel.find({});

  apiResponse(res, 200, "Question found successfully", question);
});
