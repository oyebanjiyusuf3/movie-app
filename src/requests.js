const API_KEY = "52d2f1aaffc28f4034c465eb602594e5";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,

  fetchT: "Top Rated",
  fetchA: "Action Movie",
};
