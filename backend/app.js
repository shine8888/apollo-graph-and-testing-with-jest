const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const { JwksRsa, jsonWebKeyCache } = require("jwks-rsa");
const { isValidJwt } = require("./validToken");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization || "";
        const check = await isValidJwt(token);
        const data = jwt.decode(token, { complete: true });
        const user = data.payload.scope;
        if (!check) throw new Error("You need to login");
        return {
          user,
        };
      }
    } catch (error) {
      throw new Error("Token is invalid");
    }
  },
});


server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
