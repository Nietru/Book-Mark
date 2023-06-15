import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import SearchBooks from "./pages/SearchBooks";
import Login from "./pages/Login";
// import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/user/:id" element={<Profile />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/searchBooks" element={<SearchBooks />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
