require("dotenv").config();
const express = require('express');
const {ApolloServer} = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolvers");
const connectDB = require("./utils/databaseConnect");
const mongoMethods = require("./data/db");
startApolloServer = async (typeDefs, resolvers) => {
    const app = express();
    connectDB();
    const apolloServer = new ApolloServer({
            typeDefs,
            resolvers,
            context: () => ({mongoMethods})
        }
    );
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
    app.listen({port: 4000}, () =>
        console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
    );
}
startApolloServer(typeDefs, resolvers).catch(r => console.log(r));


