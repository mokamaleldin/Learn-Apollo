// server.js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
  }
`;

const users = [
    { id: "1", name: "Ahmed", email: "ahmed@example.com" },
    { id: "2", name: "Sara", email: "sara@example.com" }
];

const resolvers = {
    Query: {
        users: () => users,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
