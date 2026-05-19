const { apiResponse } = require("../helper/apiResponse");
const { asyncController } = require("../helper/asyncController");
const { GoogleGenAI } = require("@google/genai");
const feedbackModel = require("../model/feedback.model");
const userModel = require("../model/user.model");

exports.createFeedbackController = asyncController(async (req, res) => {
    const { currentQuestion, currentAnswer, userAnswer, email } = req.body;
    console.log(userAnswer)
    if (!currentQuestion || !currentAnswer || !userAnswer || !email) {
        return apiResponse(res, 400, "All fields are required");
    }
    const user = await userModel.findOne({ email });

    if (!user) {
        return apiResponse(res, 404, "User not found");
    }


    // init gemini
    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    // prompt
    const prompt = `Question:${currentQuestion}, User Answer:${userAnswer}, Correct Answer:${currentAnswer}. Depend on question and user answer for give interview question. Please give us rating for answer nad feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with rating field and feedback field.
    
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

    let saved;

    try {
        saved = await feedbackModel.create({
            userId: user._id,
            currentQuestion,
            currentAnswer,
            userAnswer,
            rating: parsed.rating,
            feedback: parsed.feedback
        });
    } catch (err) {
        return apiResponse(res, 500, "Failed to save questions", {
            error: err.message,
        });
    }
    return apiResponse(
        res,
        200,
        "Feedback created successfully",
        saved
    );
})