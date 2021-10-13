import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function MovieDetails() {
  let { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://imdb-api.com/en/API/Title/k_yoz6v0f4/${id}`
      );
      const data = await res.json();

      setMovie(data);
    }

    getData();
  }, []);
  return (
    <Fragment>
      <div className="movieDetails">
        {movie && (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.plot}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default MovieDetails;
