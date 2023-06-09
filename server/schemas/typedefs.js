const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
      _id: ID
      username: String
      email: String
    }
    
    type Review{
      _id: ID
      reviewText: String
      reviewAuthor: String
      createdAt: String
    }
    
    type Mutation {
      addUser(username: String!, email: String!, password: String!)
    }`
