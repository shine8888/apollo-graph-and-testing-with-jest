const fs = require("fs");
const { makeExecutableSchema } = require("graphql-tools");
const { graphql } = require("graphql");
// Import resolvers and typedefs
const { resolvers } = require("./Schema/Resolvers");
const { typeDefs } = require("./Schema/TypeDefs");
// the data test
const { data } = require("./data");

// a structure for test cases
const allUsersTestCase = {
	id: "All users",
	query: `
      query {
        getAllUser{
           name
           age
           address
        }
      }
    `,
	variables: {},

	// injecting the users
	context: { users: data },

	// expected result
	expected: {
		data: {
			getAllUser: [
				{
					name: "Shine",
					age: 22,
					address: "Hanoi",
				},
				{
					name: "Kate",
					age: 24,
					address: "Bacgiang",
				},
				{
					name: "Cathy",
					age: 26,
					address: "Co",
				},
			],
		},
	},
};

describe("My Test Cases", () => {
	// array of all test cases
	const cases = [allUsersTestCase];
	// make the actual schema
	const schema = makeExecutableSchema({ typeDefs, resolvers });
	// running the test for each case in the cases array
	cases.forEach((obj) => {
		const { id, query, variables, context, expected } = obj;
		test(`query:${id}`, async () => {
			const result = await graphql(schema, query, null, context, variables);
			return expect(result).toEqual(expected);
		});
	});
});
