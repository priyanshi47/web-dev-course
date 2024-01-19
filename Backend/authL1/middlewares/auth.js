const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.auth = (req, res, next)=>{
    try{
        //extract jwt token

        const token =  req.cookies.token|| req.body.token || req.header("Authorization");

        console.log("Cookies", req.cookies.token);
        console.log("body", req.body.token);
        // console.log("header", req.header("Authorzation").replace("Bearer ", ""));

        if(!token || token == undefined){
            return res.status(401).json({
                success:false,
                message:"Token missing"
            })
        }

        //verify the token
        try{

            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            //this is done to further check for student and admin role
                req.user = decode;
        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:"token invalid"
            })

        }
           
next();




    } catch(err){

        return res.status(401).json({
            success:false,
            message:"something went wrong while verifying token!!"
        })

    }
}


exports.isStudent = (req,res,next)=>{
try{
    if(req.user.role !== "Student"){
        return res.status(401).json({
            success:false,
            message:"Only accessible to students"
        })
    }

    next();
}
catch(err){

    return res.status(500).json({
        success:false,
        message:"user role not matching"
    })

}
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"Only accessible to admins"
            })
        }
    
        next();
    }
    catch(err){
    
        return res.status(500).json({
            success:false,
            message:"user role not matching"
        })
    
    }
    }