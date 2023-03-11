const expressAsyncHandler = require("express-async-handler");
const USER = require("../database/models/user.model");
const generateToken = require("../utils/generateToken");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, photo } = req.body;

  // Handled in Forntend
  // if (!name || !email || !password) {
  //   res.status(400);
  //   throw new Error("Enter All Ahe Fields");
  // }

  const isUserExist = await USER.findOne({ email });

  if (isUserExist) {
    res.status(400).json("User Already Exists");
    throw new Error("User Already Exists");
  }

  const user = await USER.create({ name, email, password, photo });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phtoto: user.photo,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("User Not Found");
    throw new Error("User Not Found");
  }
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await USER.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      photo: user.photp,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json("Invalid Email Or Password");
    throw new Error("Invalid Email Or Password");
  }
});

module.exports = { registerUser, loginUser };
