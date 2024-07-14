const { json } = require("express");
const Book = require("../models/Book")

const getAllBooks = async (req,res)=>{
    const books = await Book.find();
    return res.status(200).json(books);
}

const getBookById = async (req,res,next)=>{

    const { bookId } = req.params;
    try {
        console.log(bookId.length)
        const book = await Book.findById(bookId);
        if(book) return res.status(200).json(book);
        const err = new Error('Ga3ed t2alif id 9a7 ??');
        err.status = 'akeed fail';
        err.statusCode = 404;
        next(err);
    } catch (error) {
        next(error);
    }
}

const createBook = async (req,res)=>{
    const { title, author, price } = req.body;
    if(!title) return json({message: 'please enter a title'});
    if(!author) return json({message: 'please enter a author name'});
    const book = await Book.create({
        title: title,
        author:author,
        price: price ?? 5,
        image: req.file.path 
    });
    return res.status(201).json(book);
}

const updateBook = async (req,res)=>{
    const { bookId } = req.params;
    console.log({...req.body})
    const book = await Book.findByIdAndUpdate(bookId, {...req.body});

    return res.status(204).json(book);
}

const deleteBook = async (req,res)=>{
    const { bookId } = req.params;
    const book = await Book.findByIdAndDelete(bookId);

    return res.status(204).json(book);
}

module.exports = {getAllBooks, getBookById, createBook, updateBook, deleteBook}