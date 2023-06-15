import React from "react";
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from "react-router-dom";

const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {review.reviewAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                added this review: {review.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{review.reviewText}</p>
            </div>
            {/* Create a link to this thought's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/reviews/${review._id}`}
            >
              Join the discussion on this book.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
