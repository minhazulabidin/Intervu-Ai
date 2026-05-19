const express = require('express')
const { createFeedbackController } = require('../../../controller/Feedback.controller')
const router = express.Router()

router.post("/createFeedback", createFeedbackController)

module.exports = router