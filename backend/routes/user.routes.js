const express = require("express");
const { registerUser, loginUser, allUser } = require("../controllers/user.controllers");
const { protect } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/search", protect, allUser);

module.exports = router;
