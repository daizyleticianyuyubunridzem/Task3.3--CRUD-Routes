const express = require('express');

const router = express.Router();
const Student = require('../models/Student');



router.get('/', async(req,res) => {
    const students = await Student.find().sort({enrollmentDate: -1});
    res.render('students', {students})
    
});

router.get('/new', (req, res) => res.render('new'));

router.get('/:id', async(req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).send('No student found');   
        }
        res.render('detail', { student })
    }
    catch(err){
        res.status(404).send('invalid student ID')
    }
});

router.post('/', async(req,res) =>{
    try{
        await Student.create(req.body);
        res.redirect('/students');   
    }
    catch(err){
        res.status(400).send('could not create a student' + err.message)
    }
});

router.post('/:id/edit', async (req, res) => {
    try{
        await Student.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true});
        res.redirect('/students');
    }
    catch(err){
        res.status(400).send('Update failed'+ err.message);
    }
});

router.post('/:id/delete', async(req, res) =>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/students');

});

module.exports = router;