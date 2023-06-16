// will be on all pages
// TODO: NOT SURE
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Footer() {
  return (
    <>
      {/* // TODO: ADD STRIPE CHARITABLE DONATIONS: */}
      <div className="foot-link col-md-4">
        <a
          href="https://github.com/Nietru/Book-Mark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </div>
    </>
  );
}
