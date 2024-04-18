const key = "69ee58cce6db4e59bc42ebbafb86ac90";

const requests = {
  requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${key}`,
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`,
  requestAiringToday: `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${key}`,
};

export default requests;
