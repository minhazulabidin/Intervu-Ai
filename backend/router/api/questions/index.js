const express = require("express");
const router = express.Router();
const {
  addQuestionController,
  getQuestionController,
  getSingleQuestionController,
} = require("../../../controller/Questions.controller");
const { isAutorize } = require("../../../middleware/isAuthorize");

router.post("/addQuestions", isAutorize, addQuestionController);
router.get("/getQuestions", isAutorize, getQuestionController);
router.get("/getQuestions/:id", isAutorize, getSingleQuestionController);

module.exports = router;
