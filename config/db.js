require('dotenv').config();
const mongoose = require ('mongoose');

const connectDB = async () => {
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connnected to the database");
}
catch(err){
    console.error('Connection failed:', err.message);
    process.exit(1);
}

};


module.exports = connectDB;