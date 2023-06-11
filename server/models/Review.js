const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat.js");

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    required: "You need to leave a review!",
    minlength: 1,
    maxlength: 500,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  // TODO: may implement ratings in the future:
  // rating: {
  //     type: Number,
  //     min: 0,
  //     max: 10,
  //     required: true,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
