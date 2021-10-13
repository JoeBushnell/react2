import { Fragment } from "react";
import { useState, useEffect } from "react";
import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

function Top250Movies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://imdb-api.com/en/API/Top250Movies/k_yoz6v0f4"
      );
      const data = await res.json();
      localStorage.setItem("top250", JSON.stringify(data));

      setMovies(data);
    }

    const top250 = localStorage.getItem("top250");
    if (!top250) {
      getData();
    } else {
      setMovies(JSON.parse(top250));
    }
  }, []);

  return (
    <Fragment>
      <h1>Top 250 Movies</h1>
      {movies && (
        <div className="movies">
          {movies?.items.map((movie, index) => (
            <Link to={`/movies/${movie.id}`}>
              <Movie key={movie.id} index={index} movie={movie} />
            </Link>
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default Top250Movies;
