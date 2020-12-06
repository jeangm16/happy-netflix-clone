import React, { userState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Row.css";

// need this base url for the images because they come back as jpg insted of a url
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = userState([]);

  // i need a snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [] is empty, runs once when the row loads, and does not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={'row__poster ${isLargeRow && "row__posterLarge" }'}
            scr={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
