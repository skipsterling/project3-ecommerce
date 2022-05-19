const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3002;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

// Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Generating a new instance of apollo server + Graphql schema.
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};
// Calling async function to start server
startApolloServer(typeDefs, resolvers);