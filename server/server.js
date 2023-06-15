const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
// JSON web token:
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

require('dontenv').config()

// Uncomment the following code once you have built the queries and mutations in the client folder
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};
startApolloServer();

const stripe = reqire('stripe')(process.env.STRIPE_PRIVATE_KEY)
