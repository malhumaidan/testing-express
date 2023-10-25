const express = require('express');
const connectDB = require('../database');
const { booksRouter } = require('./books/books.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/books',booksRouter);


connectDB();
app.listen(PORT,()=>{
    console.log('listening on port ' + PORT);
})