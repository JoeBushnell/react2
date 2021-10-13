import "./Movie.css";
import React from "react";
import Card from "react-bootstrap/Card";

function Movie({ index, movie: { image, title, year } }) {
  return (
    <div key={index}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {title} ({year})
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;
