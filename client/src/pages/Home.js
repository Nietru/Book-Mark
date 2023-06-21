import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_REVIEWS, GET_ME, GET_USER, GET_REVIEW } from "../utils/queries";
import { SAVE_BOOK } from "../utils/mutations";
import auth from "../utils/auth";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import AppNavbar from "../components/Navbar";
=======
import Navbar from "../components/Navbar";
import ReviewForm from "../components/ReviewForm";
>>>>>>> 1dfcd6bb1dfa64a1467c330cfcaa19bd5a584a88

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const [saveBook, { error }] = useMutation(SAVE_BOOK);
  const reviews = data?.reviews || [];

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ["No author to display"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
        link: book.volumeInfo.infoLink,
      }));

      setSearchedBooks(bookData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveBook = async (bookId) => {
    const foundBook = searchedBooks.find((book) => book.bookId === bookId);

    const bookToSave = {
      bookId: foundBook.bookId,
      title: foundBook.title,
      image: foundBook.image,
    };

    const token = auth.loggedIn() ? auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveBook({
        variables: { bookData: { ...bookToSave } },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const [activeBtn, setActiveBtn] = useState("");

  const handleBtnClick = (currentBtn) => {
    if (currentBtn === activeBtn) {
      setActiveBtn("");
    } else if (!activeBtn) {
      setActiveBtn(currentBtn);
    } else {
      setActiveBtn(currentBtn);
    }
  };

  return (
    <main>
      <div>
        <AppNavbar />
      </div>
      <div className="flex-row justify-center home">
        <div className="searchInput">
          <form className="searchForm" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Search for a book"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="bookResults">
          <h2>
            {searchedBooks.length
              ? `Viewing ${searchedBooks.length} results:`
              : "Search for a book to begin"}
          </h2>
          <div className="bookList">
            {searchedBooks.map((book) => {
              return (
                <div className="book" key={book.bookId}>
                  <h3 className="bookTitle">
                    <a href={book.link} target="_blank" rel="noreferrer">
                      {book.title}
                    </a>
                  </h3>
                  <p className="bookAuthor">{book.authors.join(", ")}</p>
                  <div className="bookImage">
                    <img src={book.image} alt={`The cover for ${book.title}`} />
                  </div>
                  {auth.loggedIn() && (
                    <button
                      className="saveBtn"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      Save this Book!
                    </button>
                  

                  )}
                  {auth.loggedIn() && (
                  <div>
                  <button style={{margin:5}} onClick={() => handleBtnClick(book.bookId)}>Write a Review</button>
                  {activeBtn === book.bookId && (
                  <ReviewForm bookId={book.bookId} />
                  )}
                  </div>
                  )}
             
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
