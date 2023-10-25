const { json } = require("express");
const Book = require("../models/Book")

const getAllBooks = async (req,res)=>{
    const books = await Book.find();
    return res.status(200).json(books);
}

const getBookById = async (req,res)=>{
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    return res.status(200).json(book);
}

const createBook = async (req,res)=>{
    const { title, author, price, image } = req.body;
    if(!title) return json({message: 'please enter a title'})
    if(!author) return json({message: 'please enter a author name'})
    const book = await Book.create({
        title: title,
        author:author,
        price: price ?? 5,
        image: image ?? 'https://www.roxannetroup.com/uploads/4/8/1/4/48144785/coming-f-24-nobkgd.png'
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