import React from "react";

const BookCard = ({ book }) => (
  <div
    style={{
      width: "250px",
      margin: "1rem",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      textAlign: "left",
    }}
  >
    <img
      src={book.thumbnail || "https://via.placeholder.com/128x192?text=No+Image"}
      alt={book.title}
      style={{ width: "100%" }}
    />
    <h3>{book.title}</h3>
    <p>
      <strong>Author(s):</strong> {book.authors?.join(", ") || "Unknown"}
    </p>
    <p style={{ fontSize: "0.9rem" }}>
      {book.description?.substring(0, 100)}...
    </p>
  </div>
);

export default BookCard;
