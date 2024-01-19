const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
})

fileSchema.post("save", async function(doc){
    try{
        //transporter
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            },
        })

        //send mail

        let info = await transporter.sendMail({
            from:"Priyanshi",
            to:doc.email,
            subject:"New file added in my app",
            html:`<h1>Hello jee</h1><p>File uploaded<a href="${doc.imageUrl}" >Click here</a></p>`
        })

        console.log(info);
    }
    catch(err){
            console.error(err);
            process.exit(1);
    }
})

module.exports = mongoose.model("Files", fileSchema);