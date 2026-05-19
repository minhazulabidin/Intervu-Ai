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
    question: {
        type: String,
        required: true
    },
    answer: {
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