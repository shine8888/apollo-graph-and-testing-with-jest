const axios = require("axios");
const { XMLHttpRequest } = require("xmlhttprequest");

global.XMLHttpRequest = XMLHttpRequest;

// Test query for getting all users
test("get all users", async () => {
	const response = await axios.post("http://localhost:3000/graphql", {
		query: `
        query {
            getAllUser{
                name
                age
                address
            }
        }
        `,
	});
	const { data } = response;
	expect(data).toMatchObject({
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
	});
});

// Test mutation for creating new user
test("create user", async () => {
	const response = await axios.post("http://localhost:3000/graphql", {
		query: `
      mutation {
        createUser(name: "testuser", age: 121, address: "tester") {
          name
        }
      }
      `,
	});
	const { data } = response;
	expect(data).toMatchObject({
		data: {
			createUser: {
				name: "testuser",
			},
		},
	});
});
