const expressAsyncHandler = require("express-async-handler");
const MESSAGE = require("../database/models/message.model");
const USER = require("../database/models/user.model");
const CHAT = require("../database/models/chat.model");


const allMessages = expressAsyncHandler(async (req, res) => {
    try {
        const messages = await MESSAGE.find({ chat: req.params.chatId })
            .populate("sender", "name photo email")
            .populate("chat");
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const sendMessage = expressAsyncHandler(async (req, res) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };

    try {
        var message = await MESSAGE.create(newMessage);

        message = await message.populate("sender", "name photo")
        message = await message.populate("chat")
        message = await USER.populate(message, {
            path: "chat.users",
            select: "name photo email",
        });

        await CHAT.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

        res.json(message);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { allMessages, sendMessage };