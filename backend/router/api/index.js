const express = require("express");
const router = express.Router();

router.use("/questions", require("./questions"));
router.use("/user", require("./user"));
router.use("/webhooks", require("./webhooks"));
router.use("/feedback", require("./feedback"));

module.exports = router;
