const express = require("express");
const { createContactController } = require("../../../controller/Contact.controller");
const router = express.Router();

router.post("/createContact", createContactController)

module.exports = router;