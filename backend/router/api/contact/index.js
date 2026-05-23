const express = require("express");
const router = express.Router();

router.post("/createContact", createContactController)

module.exports = router;