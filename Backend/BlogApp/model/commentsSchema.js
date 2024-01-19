const mongoose = require("mongoose");

const comments = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Posts",
        },
        user:{
            type:String,
            required: true
        },
        body:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("Comment", comments);