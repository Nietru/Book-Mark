import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../../utils/mutations";
import { QUERY_REVIEWS } from "../../utils/reviews";

const ReviewForm = () => {
  const [formState, setFormState] = useState({
    reviewText: "",
    reviewAuthor: "",
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [createReview, { error }] = useMutation(CREATE_REVIEW, {
    update(cache, { data: { createReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [createReview, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createReview({
        variables: { ...formState },
      });

      setFormState({
        reviewText: "",
        reviewAuthor: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "reviewText" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== "reviewText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What's did you think of the literature?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? "text-danger" : ""
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="reviewText"
            placeholder="Here's a new book review..."
            value={formState.reviewText}
            className="form-input w-100"
            style={{ lineHeight: "1.5" }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="reviewAuthor"
            placeholder="Add your name to get credit for the review..."
            value={formState.reviewAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Review
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
