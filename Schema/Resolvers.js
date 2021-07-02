// Getting data from database
const { data } = require("../data");

/**
 * Init the resolvers with Query and Mutation
 */
const resolvers = {
	/**
	 * Get all data from database
	 * @returns {[Int]} - An array of int
	 */
	Query: {
		getData() {
			return data;
		},
	},
	/**
	 * Get sum of an array
	 * @param {Int} args - The number added to the array
	 * @returns {Int} - The sum of array and new added number
	 */
	Mutation: {
		getSum(args) {
			var sum = 0;
			data.forEach((element) => {
				sum += element;
			});
			sum = sum + args.a;
			return parseInt(sum);
		},
	},
};

module.exports = { resolvers };
