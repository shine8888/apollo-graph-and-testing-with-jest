const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(
  expressJwt({
    secret: "SEcreTkEYY",
    algorithms: ["HS256"],
    credentialsRequired: false,
  })
);

// get the user info from a JWT
const getUser = (token) => {
  if (token) {
    try {
      return jwt.verify(token, "SEcreTkEYY");
    } catch (err) {
      throw new Error("Session invalid");
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1] || "";
      const userInfor = getUser(token);
      return {
        userInfor,
      };
    }
  },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
