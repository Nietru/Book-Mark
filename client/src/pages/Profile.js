import React from "react";
import { useQuery } from "@apollo/client";

import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

import { QUERY_REVIEWS } from "../utils/queries";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ReviewForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList reviews={reviews} title="Books I have reviewed..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
