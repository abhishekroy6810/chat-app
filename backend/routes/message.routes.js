const express = require("express");
const { allMessages, sendMessage } = require("../controllers/message.controllers");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;