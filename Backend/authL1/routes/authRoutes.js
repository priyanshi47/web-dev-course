

const express = require("express");
const router = express.Router();

const { login, signup} = require("../controllers/Auth1");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

 router.post("/login", login);
router.post("/signup", signup);


// protected routes

router.get("/test", auth, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to testing route!!"
    })
});

router.get("/student", auth, isStudent, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome student!!"
    })
});

router.get("/admin", auth, isAdmin, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome Admin!!"
    })
});



module.exports = router;
