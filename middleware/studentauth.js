let zod = require("zod");
//zod schemas
let usernameschema = zod.string();
let passwordschema = zod.string();
let emailschema = zod.string();
let studentidschema = zod.number(); 
function studentauth(req,res,next)
{
    let username = req.headers.username;
    let password = req.headers.password;
    let email = req.headers.email;
    let studentid = req.headers.studentid;
    let res1 = usernameschema.safeParse(username);
    let res2 = passwordschema.safeParse(password);
    let res3 = emailschema.safeParse(email);
    let res4 = studentidschema.safeParse(studentid);
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

module.exports  = studentauth;