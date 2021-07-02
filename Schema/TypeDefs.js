const {gql} = require('apollo-server')

const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        address: String
    }

    # Queries
    type Query {
        getAllUser: [User!]!
    }


    # Mutetations
    type Mutation {
        createUser(name: String!, age: Int!, address: String): User!
    }
`

module.exports = {typeDefs}