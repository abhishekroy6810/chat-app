const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "USER" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "CHAT" },
        readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "USER" }],
    },
    { timestamps: true }
);

const MESSAGE = mongoose.model("MESSAGE", messageSchema);

module.exports = MESSAGE;