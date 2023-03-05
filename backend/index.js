const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database/connectDatabase");
const userRoutes = require("./routes/user.routes");
dotenv.config();
connectDatabase();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
