//  Student Routes
const { Router } = require("express");
const studentauth = require("../middleware/studentauth");
const isStudent = require("../middleware/isstudent");
const { Student } = require("../db");
const { Subject } = require("../db");
const router = Router();

// Signup Route
router.post("/signup",studentauth,async (req,res)=>{
    let username = req.headers.username;
    let password = req.headers.password;
    let email = req.headers.email;
    let studentid = req.headers.studentid;
    // Exsisting username check
    let response = await Student.findOne({username:username});
    if(response)
    {
        res.status(403).json({
            msg:"Username Already Exsists"
        });
    }
    else
    {
        Student.create({
            username,
            password,
            email,
            studentid
        });
    }
    res.json({msg:"Student Account Created!"});
});
// sigin route
router.get("/signin",isStudent,studentauth,async (req,res)=>{
    let username = req.headers.username;
    res.json({
            status: "User Exsists",
            msg:"Welcome! "+username
        });
// Subejcts route
router.get("/subjects",isStudent,studentauth,async(req,res)=>{
    let response = await Subject.find({});
    res.json({
        msg:"All The Available Subjects",
        subjects: response
    });
})
});

module.exports = router;