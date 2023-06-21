import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER, GET_ME } from "../utils/queries";
// import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import Auth from "../utils/auth";
import { SAVE_BOOK } from "../utils/mutations";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? GET_USER : GET_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/user/:user_id" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const savedBooks = user.savedBooks;

  return (
    <Container>
      <h2 className="pt-5">
        {savedBooks?.length
          ? `Viewing ${savedBooks.length} results:`
          : "Books will display here!"}
      </h2>
      <Row>
        {savedBooks?.map((book) => {
          return (
            <Col md="4">
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Profile;
