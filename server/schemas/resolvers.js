const { User, Review } = require("../models"); // import the models
const { AuthenticationError } = require("apollo-server-express"); // import the apollo-server errors
const { signToken } = require("../utils/auth"); // import the signToken function from the auth.js file

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("user");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    users: async () => {
      return User.find().populate("user");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ userId }).populate("user");
    },
    reviews: async () => {
      return Review.find().populate("review");
    },
    review: async (parent, { reviewId }) => {
      return Review.findOne({ reviewId }).populate("review");
    },
  },
};

module.exports = resolvers;
