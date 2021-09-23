const {ApolloServer} = require("apollo-server-express");
const typeDefs = require("../schema/schema");
const resolver = require("../resolver/resolvers");

const ApolloServerStart = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolver
    });
    await server.start();
    server.applyMiddleware({app});
    return server;
}
module.exports = ApolloServerStart;