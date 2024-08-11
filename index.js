const express = require("express");
const bodyparser = require("body-parser");
const Studentroute = require("./routes/student");
const Teacherroute = require("./routes/teacher");
let app = express();

//Main Routes
app.use(bodyparser.json());
app.use("/student",Studentroute);
app.use("/teacher",Teacherroute);

let port = 3000;

app.listen(port,()=>{
    console.log(`Server Running on port:${port}`);
});