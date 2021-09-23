const Author = require("../model/Author");
const Book = require("../model/Book");
const resolvers = {
    //Query
    Query: {
        books: async (parent, args, {mongoMethods}) => await mongoMethods.getAllBook(),
        book: async (parent, args, {mongoMethods}) => await mongoMethods.findBookById(args.id),
        authors: async (parent, args, {mongoMethods}) => await mongoMethods.getAllAuthor(),
        author: async (parent, args, {mongoMethods}) => await mongoMethods.findAuthorById(args.id),
    },
    Book: {
        author: async (parent, args, {mongoMethods}) => await mongoMethods.findBookAuthorByAuthorId(parent.authorId),
    },
    Author: {
        books: async (parent, args, {mongoMethods}) => await mongoMethods.getAllBook({authorId: parent.id}),
    },
    //Mutation
    Mutation: {
        createAuthor: async (parent, args, {mongoMethods}) => {
            return await mongoMethods.createAuthor(args);
        },
        createBook: async (parent, args, {mongoMethods}) => {
            return await mongoMethods.createBook(args);
        },
    }
}
module.exports = resolvers;