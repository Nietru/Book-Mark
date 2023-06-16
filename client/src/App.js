import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AppNavbar from "./components/Navbar";
import SearchBooks from "./pages/SearchBooks";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNavbar></AppNavbar>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/user/:id" element={<Profile />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/searchBooks" element={<SearchBooks />} />
            </Routes>
          </div>
          <Footer></Footer>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
