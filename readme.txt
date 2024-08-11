This is the backend for a Quiz Platform (Quizify):
1) Main Users: Teachers & Students.
2) Directory Navigation:
   -> Main Directory: Quizify_backend_src
   -> Sub Directories: db,middleware,node_modules,routes
   -> Main File: index.js
   
4) Sub Directory Navigation:
   -> db: index.js (File)
   -> middleware: isstudent.js,isteacher.js,studentauth.js,teacherauth.js (Files)
   -> routes: student.js,teacher.js (Files)
   
6) Files Explination:
   -> db-(index.js): Contains database schemas & models for Teachers,Students and Subjects.
   -> middleware-(studentauth.js): performs input validation with the help of Zod Library.
   -> middleware-(isstudent.js): makes an authentication check if the user exsists in the Database or not.
   -> middleware-(teacherauth.js): performs input validation with the help of Zod Library.
   -> middleware-(isteacher.js): makes an authentication check if the user exsists in the Database or not.
   -> routes-(student.js): contains all the route handlers for the students paths.
   -> routes-(teacher.js): contains all the route handlers for the teachers paths.

7) Routes Explination:
   i) Student Routes:
      -> "/student/signup" : creates a new user and saves the details in the database & it even checks if the username already exsists in the database.
      -> "/student/sigin" : to verify if the user has been created or not
      -> "student/subjects" : returns all the subjects entered by the teacher in the Subjects Table.
   ii) Teacher Routes:
      -> "/teacher/signup" : creates a new user and saves the details in the database & it even checks if the username already exsists in the database.
      -> "/teacher/sigin" : to verify if the user has been created or not
      -> "teacher/subjects" : Let's the faculty create and add subjects to the db and even checks if the subject already exsists.
   

9) Libraries & Frameworks used:
   -> Node.js
   -> Express.js
   -> mongoose.js
   -> zod.js