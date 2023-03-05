const expressAsyncHandler = require("express-async-handler");
const USER = require("../database/models/user.model");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, photo } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Enter All Ahe Fields");
  }

  const isUserExist = await USER.findOne({ email });

  if (isUserExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await USER.create({ name, email, password, photo });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phtoto: user.photo,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

module.exports = { registerUser };
