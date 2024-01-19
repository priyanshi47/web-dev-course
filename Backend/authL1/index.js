const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

const authRoutes = require("./routes/authRoutes");
app.use("/api/v1", authRoutes);

app.listen(PORT, ()=>{
    console.log("app started");
})