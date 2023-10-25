const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook } = require('./books.controller');

const booksRouter = express.Router();


booksRouter.get('/',getAllBooks)
booksRouter.get('/:bookId',getBookById);
booksRouter.post('/',createBook);
booksRouter.put('/:bookId',updateBook);


module.exports = {booksRouter}