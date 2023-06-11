// TODO: NO CLUE IF THIS IS RIGHT: ALL OF THIS FILE:

// export const getReviewedBookIds = () => {
//   const reviewedBookIds = localStorage.getItem("reviewed_books")
//     ? JSON.parse(localStorage.getItem("reviewed_books"))
//     : [];

//   return savedBookIds;
// };

// export const reviewBookIds = (reviewIdArr) => {
//   if (reviewIdArr.length) {
//     localStorage.setItem("reviewed_books", JSON.stringify(reviewIdArr));
//   } else {
//     localStorage.removeItem("reviewed_books");
//   }
// };

// export const removeReviewId = (reviewId) => {
//   const reviewedBookIds = localStorage.getItem("reviewed_books")
//     ? JSON.parse(localStorage.getItem("reviewed_books"))
//     : null;

//   if (!reviewedBookIds) {
//     return false;
//   }

//   const updatedReviewedBookIds = reviewedBookIds?.filter(
//     (reviewedBookId) => reviewedBookId !== reviewId
//   );
//   localStorage.setItem("saved_books", JSON.stringify(updatedReviewedBookIds));

//   return true;
// };
