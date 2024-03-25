fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.results.forEach((movie) => {
      const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
      const markup = `<div>
      <h2>${movie.title}</h2> <p>Release Date: ${movie.release_date}</p> <img src="${backdropUrl}" alt="${movie.title} Backdrop"></div><br><br>`;

      document.querySelector("#movies").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((err) => {
    console.log(err);
  });
