//  Student Routes
const { Router } = require("express");
const teacherauth = require("../middleware/teacherauth");
const isTeacher = require("../middleware/isteacher");
const { Teacher } = require("../db");
const { Subject } = require("../db");
const router = Router();
// Signup Route
router.post("/signup",teacherauth,async (req,res)=>{
    let username = req.headers.username;
    let password = req.headers.password;
    let email = req.headers.email;
    let teacherid = req.headers.teacherid;
    // Exsisting username check
    let response = await Teacher.findOne({username:username});
    if(response)
    {
        res.status(403).json({
            msg:"Username Already Exsists"
        });
    }
    else
    {
        Teacher.create({
            username,
            password,
            email,
            teacherid
        });
    }
    res.json({msg:"Teacher Account Created!"});
});
// sigin route
router.get("/signin",isTeacher,teacherauth,async (req,res)=>{
    let username = req.headers.username;
    res.json({
            status: "User Exsists",
            msg:"Welcome! "+username
        });
// Subejcts route
router.get("/subjects",isTeacher,teacherauth,async(req,res)=>{
    let Subject_Name = req.body.subject_name;
    //Checking if the subject exsist
    Subject.create({Subject_Name});
    res.json({msg:"Subject Added Successfully!!"});
})
});

module.exports = router;