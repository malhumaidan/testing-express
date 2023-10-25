const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('./books.controller');

const booksRouter = express.Router();


booksRouter.get('/',getAllBooks)
booksRouter.get('/:bookId',getBookById);
booksRouter.post('/',createBook);
booksRouter.put('/:bookId',updateBook);
booksRouter.delete('/:bookId',deleteBook);


module.exports = {booksRouter}