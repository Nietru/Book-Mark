import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
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

export const QUERY_REVIEWS = gql`
  query reviews {
    reviews {
      _id
      reviewText
      reviewAuthor
      createdAt
      book {
        bookId
        title
      }
    }
  }
`;
