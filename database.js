const mongoose = require('mongoose');
require("dotenv").config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        // console.log(process.env.MONGO_DB_URL)
        console.log(`mongo connected: ${conn.connection.host}`);    
    } catch (error) {
        console.log({"error": error});
    }
    
  };

  module.exports = connectDB;