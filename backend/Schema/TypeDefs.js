const { gql } = require("apollo-server");
/**
 * Init the TypeDefs with 2 types Query and Mutation
 */
const typeDefs = gql`
  #Query
  type Query {
    getAllUser: [User]
    getUser: [User]
    getNaRole: [User]
  }
  #Type User
  type User {
    id: Float
    email: String
    password: String
    role: String
    firstName: String
    lastName: String
    token: String
  }
  # Mutation
  type Mutation {
    login(email: String!, password: String!): User
  }
`;

module.exports = { typeDefs };
