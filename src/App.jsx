import React, { useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("click the btn to get new Quote!");
  const [author, setAuthor] = useState("");

  const newQuote = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
    const response = await fetch(url, {
      headers: { "X-Api-Key": `TYPFYFBxM82LEtiPBVmYsQ==R3T5ZBGICLUKnNKW` },
    });
    const data = await response.json();

    console.log(data);
    setQuote(data[0].quote);
    setAuthor(data[0].author);
  };

  return (
    <div className="body">
      <div className="app">
        <h1 className="h1">Quotes Generator</h1>
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
        <button className="btn" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
