const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  bookId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
