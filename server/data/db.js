const Book = require("../model/Book");
const Author = require("../model/Author");

const mongoMethods = {
    getAllBook: async (condition = null) => {
        if (condition === null) {
            return Book.find();
        } else {
            return Book.find(condition);
        }
    },
    createBook: async args => {
        const newBook = new Book(args);
        return await newBook.save();
    },
    findBookById: async (id) => await Book.findById(id),
    findBookAuthorByAuthorId: async (authorId) => await Author.findById(authorId),
    getAllAuthor: async () => await Author.find(),
    createAuthor: async args => {
        const newAuthor = new Author(args);
        return await newAuthor.save();
    },
    findAuthorById: async (id) => await Author.findById(id),
}
module.exports = mongoMethods;