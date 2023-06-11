const { User, Review } = require("../models"); // import the models
const { AuthenticationError } = require("apollo-server-express"); // import the apollo-server errors
const { signToken } = require("../utils/auth"); // import the signToken function from the auth.js file

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("reviews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ userId }).populate("reviews");
    },
    review: async (parent, { reviewId }) => {
      return Review.findOne({ reviewId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password }); // create a new user
      const token = signToken(user); // create a token for the new user
      return { token, user }; // return the token and user
    },
    createReview: async (parent, { reviewText }, context) => {
      if (context.user) {
        const review = await Review.create({
          reviewText,
          reviewAuthor: context.user.username,
        }); // create a new review
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        ); // add the review to the user's reviews array field
        return review; // return the review
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username }); // find the user by username
      if (!user) {
        throw new AuthenticationError("No user found with this username!");
      }
      const correctPw = await user.isCorrectPassword(password); // check if the password is correct
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }
      const token = signToken(user); // create a token for the user
      return { token, user }; // return the token and user
    },
  },
};

module.exports = resolvers;
