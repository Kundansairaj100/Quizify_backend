const { Student } = require("../db");

async function isStudent(req,res,next)
{
    let username = req.headers.username;
    let password = req.headers.password;
    let res1 = await Student.findOne({username:username});
    let res2 = await Student.findOne({password:password});
    if(res1 && res2)
    {
        next();
    }
    else
    {
        res.status(403).json({
            msg:"Student Account Dosen't Exsist!"
        });
    }
}

module.exports = isStudent;