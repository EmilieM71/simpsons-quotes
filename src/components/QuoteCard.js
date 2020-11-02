import React from "react";
import "./QuoteCards.css";

function QoteCards({ quotes }) {
  return (
    <figure className="QuoteCard">
      <img src={quotes.image} alt={quotes.character} />
      <figcaption>
        <blockquote>{quotes.quote}</blockquote>
        <cite>{quotes.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QoteCards;
