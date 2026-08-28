const express = require('express');
const router = express();
const path  = require('path'); 
const connectDB = require('./config/db')
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use (express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


connectDB(); 

app.use('/students', require('./routes/students'));

app.get('/', (req, res) => res.redirect('/students'));

app.listen(PORT, () => {
    console.log(`Server is running live at http://localhost:${PORT}`);
});


// app.get('/', (req, res) => {
//     res.redirect('/students');
// });

// // 1. Get all students
// app.get('/students', (req, res) => {
//     res.render('students', { students: Students });
// });

// // 2. Show the form to add a new student (Must be placed BEFORE /students/:id)
// app.get('/students/new', (req, res) => {
//     res.render('new');
// });
// // 3. Get a single student by ID
// app.get('/students/:id', (req, res) => {
//     const studentId = req.params.id;
    
//     // Searching the Students array 
//     const student = Students.find(s => s.id === studentId);

//     if (!student) {
//         return res.status(404).send('No student found');
//     }

//     res.render('detail', { student: student });
// });

// 4. Process form submission and add student (Fixed URL to match /students/new)
// app.post('/students/new', (req, res) => {
    
//     const { name, major, age } = req.body;

//     const newId = Date.now().toString();

//     const newStudent = {
//         id: newId,
//         name: name,
//         major: major,
//         age: age
//     };
    
//     Students.push(newStudent);

//     // Redirecting the user back to the student list page
//     res.redirect('/students');
// });



