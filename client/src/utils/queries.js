import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      reviewCount
    }
  }
`;

export const GET_USER = gql`
    query user($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            reviews: [Review]
        }
    }
`;

export const GET_REVIEW = gql`
  query review($reviewId: ID!) {
    review(reviewId: $reviewId) {
      _id
      reviewText
      reviewAuthor
      createdAt
      book {
        bookId
        title
        image
      }
    }
  }
`;
