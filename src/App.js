import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const searchBooks = () => {
    if (!query) return;
    axios
      .get("http://127.0.0.1:5000/search?q=" + query)
      .then((res) => {
        setBooks(res.data);
        setError("");
      })
      .catch(() => {
        setBooks([]);
        setError("Something went wrong.");
      });
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>📚 Book Finder</h1>
      <input
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={searchBooks} style={{ marginLeft: "10px" }}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
