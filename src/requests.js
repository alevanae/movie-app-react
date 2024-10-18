const API_KEY = "2bec0f61492295dcc56b5a9be0bf5ac5";
const token = "RYoOcWM4JW";
const domain = "https://api.themoviedb.org/3";
const requests = {
  fetchTrending: `${domain}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${domain}/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `${domain}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${domain}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${domain}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${domain}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${domain}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${domain}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `${domain}/search/movie?api_key=${API_KEY}&language=en-US`,
};

export { requests, API_KEY, token, domain };
