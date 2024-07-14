const { Schema, model} = require('mongoose');

const bookSchema = Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    price: {type: Number, required: false, default: 5},
    image: {type: String, required: false}
})

module.exports = model('Book', bookSchema);