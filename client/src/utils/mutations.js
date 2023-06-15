import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($reviewText: String!) {
    createReview(reviewText: $reviewText) {
      _id
      reviewText
      reviewAuthor
      createdAt
      book {
        _id
        bookId
        title
        image
      }
    }
  }
`;
