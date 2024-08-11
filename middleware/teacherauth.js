let zod = require("zod");
//zod schemas
let usernameschema = zod.string();
let passwordschema = zod.string();
let emailschema = zod.string();
let teacheridschema = zod.number(); 
function teacherauth(req,res,next)
{
    let username = req.headers.username;
    let password = req.headers.password;
    let email = req.headers.email;
    let teacherid = req.headers.teacherid;
    let res1 = usernameschema.safeParse(username);
    let res2 = passwordschema.safeParse(password);
    let res3 = emailschema.safeParse(email);
    let res4 = teacheridschema.safeParse(teacherid);
    if(res1 && res2 && res3 && res4)
    {
        next();
    }
    else
    {
        res.status(403).json({
            msg:"Incorrect Data Format Headers"
        });
    }
}

module.exports  = teacherauth;