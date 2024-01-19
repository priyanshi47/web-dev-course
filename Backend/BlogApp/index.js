const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const routes = require("./routes/blogs");

app.use("/api/v1", routes);

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res)=>{
    res.send("<h1>This is Homepage</h1>");
})