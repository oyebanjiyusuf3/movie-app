import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import requests from "./requests";
import Movie from "./Movie";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div>
      <div className="main-header">
        <h1 className="logo">Movie App</h1>
        <nav className="header">
          <ul>
            <li onClick={() => setSelectedOption(requests.fetchTrending)}>
              Trending
            </li>
            <li onClick={() => setSelectedOption(requests.fetchTopRated)}>
              Top Rated
            </li>
            <li onClick={() => setSelectedOption(requests.fetchActionMovies)}>
              Action
            </li>
            <li onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
              Comedy
            </li>
            <li onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
              Romance
            </li>
            <li onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
              Horror
            </li>
            <li onClick={() => setSelectedOption(requests.fetchScifiMovies)}>
              Scifi
            </li>
            <li
              onClick={() => setSelectedOption(requests.fetchAnimationMovies)}
            >
              Animation
            </li>
            <li onClick={() => setSelectedOption(requests.fetchMysteryMovies)}>
              Mystery
            </li>
            <li onClick={() => setSelectedOption(requests.fetchTv)}>TV</li>
          </ul>
        </nav>
      </div>

      <div>
        <Movie selectedOption={selectedOption} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
