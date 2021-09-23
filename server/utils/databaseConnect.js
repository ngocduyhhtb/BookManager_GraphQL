const mongoose = require("mongoose");

module.exports = connectDB = async (uri, callback) => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/book_graphql`)
        console.log("MongoDB connected")
    } catch (error) {
        throw error;
    }
}