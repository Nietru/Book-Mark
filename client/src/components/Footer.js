// will be on all pages
// TODO: NOT SURE
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Footer() {
  return (
    <>
      {/* // TODO: ADD STRIPE CHARITABLE DONATIONS: */}
      <div className="foot-link col-md-4 text-center">
        <a
          href="https://github.com/Nietru/Book-Mark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </>
  );
}
