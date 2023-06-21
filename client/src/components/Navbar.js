// will be on all pages
// TODO: add logout button
// Put searchbooks in navbar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

import Auth from "../utils/auth";
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const user = parseJwt(localStorage.getItem("id_token"));

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar" />
          <Nav className="ml-auto d-flex nav-links">
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to="/reviewList">
                  See Your Reviews!
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={`/user/${user.data._id}`}>
                  Profile
                </Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => setShowModal(true)}></Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUp handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
