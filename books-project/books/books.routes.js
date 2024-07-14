const express = require('express');
// Require the upload middleware
const upload = require('../Multer');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('./books.controller');

const booksRouter = express.Router();




booksRouter.get('/',getAllBooks);
booksRouter.get('/:bookId',getBookById);
booksRouter.post('/',upload.single('image'),createBook);
booksRouter.put('/:bookId',updateBook);
booksRouter.delete('/:bookId',deleteBook);


module.exports = {booksRouter}