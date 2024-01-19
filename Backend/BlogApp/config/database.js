const mongoose = require("mongoose");

require("dotenv").config();
const dbUrl = process.env.DATABASE_URL;

function dbConnect(){
    mongoose.connect(dbUrl, {
        UseNewUrlParser: true,
        UseUnifiedTopology: true
    }).then(()=>{
        console.log("Database Connection Successfull");
    }).catch((error)=>{
        console.log("Error in connecting with Db");
        console.log(error.message);
     })
}

module.exports = dbConnect;
