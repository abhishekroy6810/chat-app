const express = require("express");
const { accessChat, fetchChat, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require("../controllers/chat.controllers");
const { protect } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/access", protect, accessChat);
router.get("/fetch", protect, fetchChat);
router.post("/group", protect, createGroupChat);
router.put("/rename", protect, renameGroup);
router.put("/remove", protect, removeFromGroup);
router.put("/add", protect, addToGroup);

module.exports = router;
