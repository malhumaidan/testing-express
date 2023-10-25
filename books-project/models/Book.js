const { Schema, model} = require('mongoose');

const bookSchema = Schema({
    title: String,
    author: String,
    price: Number,
    image: String
})

module.exports = model('Book', bookSchema);