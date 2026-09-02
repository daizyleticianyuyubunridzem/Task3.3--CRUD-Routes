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




