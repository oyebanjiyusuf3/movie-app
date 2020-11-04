import React, { useState, useEffect, forwardRef } from "react";
import "./App.css";
import axios from "./axios";
import Flipmove from "react-flip-move";

const base_url = "https://image.tmdb.org/t/p/original";
const Trending = forwardRef(({ selectedOption }, ref) => {
  const [movies, setMovies] = useState([]);
  const [readMore] = useState(false);

  useEffect(() => {
    axios.get(selectedOption).then((request) => {
      console.log(request);
      return setMovies(request.data.results);
    });
  }, [selectedOption]);
  return (
    <div>
      <h2 className="heading">Showing Top {movies.length} Movies </h2>
      <div className="container">
        {movies.map((movie) => {
          const { id, title, backdrop_path, overview, name } = movie;

          return title || backdrop_path ? (
            <Flipmove>
              <div ref={ref} className="moviecard" key={id}>
                <img
                  // src="https://wallpapercave.com/wp/zEzDJvA.jpg"
                  src={`${base_url}${backdrop_path || ""}`}
                  alt="movie name"
                />
                <h5>{title || name}</h5>

                <div className="over">
                  {readMore ? overview : overview.substring(0, 100)}
                  <div className="overview">
                    {readMore ? overview : overview.substring(100, 1000)}
                  </div>

                  {/* {readMore ? overview : overview.substring(0, 100)} ...
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "less" : "more"}
                </button> */}
                </div>
              </div>
            </Flipmove>
          ) : null;
        })}
      </div>
    </div>
  );
});

export default Trending;
