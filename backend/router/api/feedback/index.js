const express = require("express");
const {
  createFeedbackController,
} = require("../../../controller/Feedback.controller");
const { isAutorize } = require("../../../middleware/isAuthorize");
const router = express.Router();

router.post("/createFeedback", isAutorize, createFeedbackController);

module.exports = router;
