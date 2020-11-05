import React, { useState, useEffect, forwardRef } from "react";
import "./App.css";
import axios from "./axios";
import Flipmove from "react-flip-move";
import { ThumbUp } from "@material-ui/icons";
import Loading from "./Loading";

const base_url = "https://image.tmdb.org/t/p/original";
const Movie = forwardRef(({ selectedOption }, ref) => {
  const [movies, setMovies] = useState([]);
  const [readMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(selectedOption).then((request) => {
      console.log(request);
      setMovies(request.data.results);
      setLoading(false);
    });
  }, [selectedOption]);

  return loading ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <div>
      <h2 className="heading">Showing Top {movies.length} Movies </h2>
      <div className="container">
        {movies.map((movie) => {
          const {
            id,
            title,
            backdrop_path,
            overview,
            name,
            vote_count,
          } = movie;

          return title || backdrop_path ? (
            <Flipmove>
              <div ref={ref} className="moviecard" key={id}>
                <img
                  // src="https://wallpapercave.com/wp/zEzDJvA.jpg"
                  src={`${base_url}${backdrop_path || ""}`}
                  alt="movie name"
                />
                <div>
                  <h5 className="title">
                    {title || name}
                    <span>
                      {vote_count}
                      <ThumbUp fontSize="small" />
                    </span>
                  </h5>
                </div>

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

export default Movie;
