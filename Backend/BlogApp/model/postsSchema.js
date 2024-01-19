const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        },
        content:{
            type:String,
            required:true
        },
        likes:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "likes"
        },
        comments:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
);



module.exports = mongoose.model("Posts",postSchema);

