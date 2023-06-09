import { gql } from '@apollo/client';

//login using email or username
export const LOGIN = gql`
 mutation login($username: String, $password: String!, $email: String){
     login(username: $username, password: $password, email: $email){ 
        token
        user{
        _id
        }
     }
}`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
}`;