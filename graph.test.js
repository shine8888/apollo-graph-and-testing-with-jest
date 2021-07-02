const { resolvers } = require("./Schema/Resolvers");
/**
 * Function test the total sum of an array
 */
describe("getTotalSum", () => {
	test("should return the total sum of an array", () => {
		expect(resolvers.Mutation.getSum({ a: 5 })).toBe(30);
	});
});
