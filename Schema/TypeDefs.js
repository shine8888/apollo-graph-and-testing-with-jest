const { gql } = require("apollo-server");
/**
 * Init the TypeDefs with 2 types Query and Mutation
 */
const typeDefs = gql`
	#Query
	type Query {
		getData: [Int!]
	}

	# Mutation
	type Mutation {
		getSum(a: Int!): Int!
	}
`;

module.exports = { typeDefs };
