// will be on all pages
// TODO: add App Title
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Header() {
  return (
    <>
      <div className="header col-12">
        <h1 className="display-4 text-center">Book-Mark!</h1>
        <h2 className="text-center">
          Search for Books. Let readers know what you think!
        </h2>
      </div>
    </>
  );
}
