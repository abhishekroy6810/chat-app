const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database/connectDatabase");
dotenv.config();
connectDatabase();
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
