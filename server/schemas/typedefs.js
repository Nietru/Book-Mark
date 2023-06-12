const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User{
      _id: ID
      username: String
      email: String
      reviews: [Review]
    }

    type Book{
      _id: ID
      bookId: String
      title: String
      image: String
      reviews: [Review]
    }
    
    type Review{
      _id: ID
      reviewText: String
      reviewAuthor: String
      createdAt: String
    }

    type Auth {
      token: ID
      user: User
    }

    type Query {
      me: User
      user(userId): User
      review(reviewId: ID!): Review
    }
    
    type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth
      createReview(reviewText: String!): Review
      login(username: String!, password: String!): Auth
      # removeReview(reviewId: ID!): Review
      # updateReview(reviewId: ID!, reviewText: String!): Review
    }`;

module.exports = typeDefs;
