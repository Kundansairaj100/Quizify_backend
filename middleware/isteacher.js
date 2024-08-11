const { Teacher } = require("../db");

async function isTeacher(req,res,next)
{
    let username = req.headers.username;
    let password = req.headers.password;
    let res1 = await Teacher.findOne({username:username});
    let res2 = await Teacher.findOne({password:password});
    if(res1 && res2)
    {
        next();
    }
    else
    {
        res.status(403).json({
            msg:"Teacher Account Dosen't Exsist!"
        });
    }
}

module.exports = isTeacher;