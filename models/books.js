const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  author : { type: mongoose.Schema.ObjectId, ref: '/*請填入答案*/' },
  title: String
}, { versionKey: false }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;