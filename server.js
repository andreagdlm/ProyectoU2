// server.js
const { ApolloServer } = require('apollo-server');
const productTypeDefs = require('./src/schemas/productsSchema');
const userTypeDefs = require('./src/schemas/usuariosSchema');
const resolvers = require('./src/resolvers/resolvers');

const typeDefs = [productTypeDefs, userTypeDefs];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
