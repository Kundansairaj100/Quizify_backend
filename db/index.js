const mongoose = require("mongoose");
// Connecting Mongoose
mongoose.connect("mongodb+srv://kundan:username:<password>@cluster0.uxlratl.mongodb.net/quizify");
// Schemas
const TeacherSchema = mongoose.Schema({
    username: String,
    facultyid: Number,
    password: String,
    email: String
});
const StudentSchema = mongoose.Schema({
    username: String,
    studentid: Number,
    password: String,
    email: String
});
const SubjectSchema = mongoose.Schema({
    Subject_Name: String,
});

let Teacher = mongoose.model("Teachers",TeacherSchema);
let Student = mongoose.model("Students",StudentSchema);
let Subject = mongoose.model("Subjects",SubjectSchema);

//Exporting
module.exports  = {
    Teacher,
    Student,
    Subject
}
