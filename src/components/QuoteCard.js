import React from 'react';
import './QuoteCards.css'


function QoteCards (props) {
  return (
    <figure className="QuoteCard">
      <img
      src={props.user.author.image}
      alt={props.user.author.character}/>
      <figcaption>
        <blockquote>
        {props.user.quote}
        </blockquote>
        <cite>{props.user.author.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QoteCards;