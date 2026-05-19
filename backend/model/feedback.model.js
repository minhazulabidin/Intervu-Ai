const { default: mongoose } = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    rating: {
        type: Number,
        required: true
    },
    currentQuestion: {
        type: String,
        required: true
    },
    currentAnswer: {
        type: String,
        required: true
    },
    userAnswer: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Feedback", feedbackSchema);