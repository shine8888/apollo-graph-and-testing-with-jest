// Getting data from database
const { data } = require("../data");
const jwt = require("jsonwebtoken");

/**
 * Init the resolvers with Query and Mutation
 */
const resolvers = {
  /**
   * Get data from database
   * @returns @[User]
   */
  Query: {
    // This is getting data for only Admin
    getAllUser(root, args, context, models) {
      if (
        !context.user ||
        !context.user.includes("aws.cognito.signin.user.admin")
      ) {
        return [];
      }
      const u = data;
      return u;
    },
    // This is getting data for only user
    getUser(root, args, context, models) {
      if (
        !context.user ||
        !context.user.includes("aws.cognito.signin.user.user")
      )
        return [];
      const u = data.filter((user) => user.role === "user");
      return u;
    },
    // This is getting data for only NA Role
    getNaRole(root, args, context, models) {
      if (!context.user || !context.user.includes("aws.cognito.signin.user.na")) return [];
      const u = data.filter((user) => user.role === "NA");
      return u;
    },
  },
  /**
   * Login and return user with JWT
   * @param parent args - the email and password injected
   * @returns User - return user logged in with  token
   */
  Mutation: {
    // Login and return user with JWT Token
    login(parent, args) {
      const user = data.find(
        (user) => user.email === args.email && user.password === args.password
      );

      if (user) {
        user.token = jwt.sign({ user }, "SEcreTkEYY", {
          algorithm: "HS256",
          expiresIn: "8h",
        });
        return user;
      }
    },
  },
};

module.exports = { resolvers };
