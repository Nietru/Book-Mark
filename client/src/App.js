import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import LoginForm from "./components/LoginForm";

// TODO: import pages once created!!!

// import Home from "./pages/Home";
// import Matchup from "./pages/Matchup";
// import Vote from "./pages/Vote";

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
            {/* <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
