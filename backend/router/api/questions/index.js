const express = require('express');
const router = express.Router();
const { addQuestionController ,getQuestionController,getSingleQuestionController} = require('../../../controller/Questions.controller');


router.post('/addQuestions', addQuestionController)
router.get('/getQuestions', getQuestionController)
router.get('/getQuestions/:id', getSingleQuestionController)

module.exports = router;