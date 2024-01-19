const mongoose = require("mongoose");

require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;


function dbConnect(){
    mongoose.connect(DATABASE_URL, {
        UseNewUrlParser: true,
        UseUnifiedTopology: true
    })
    .then ( ()=> console.log("database connected successfully"))
    .catch(
        (err) =>{
            console.log(err.message)
            process.exit(1)
        } 
        )
}

module.exports = dbConnect;