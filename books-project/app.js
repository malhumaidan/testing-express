const express = require('express');
const connectDB = require('../database');
const { booksRouter } = require('./books/books.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/books',booksRouter);

app.use('*',(req,res, next)=>{
    // res.send({message: "route not found yal7abeeb"});

    const error = new Error('route not found yal7abeeb');
    error.status = 'fail';
    error.statusCode = 404;

    next(error);
});

app.use((error, req,res,next)=>{

    res.status = res.status || 'error';
    res.status(error.statusCode ?? 500).json({
        status: error.statusCode,
        message: error.message
    })
});

connectDB();
app.listen(PORT,()=>{
    console.log('listening on port ' + PORT);
})