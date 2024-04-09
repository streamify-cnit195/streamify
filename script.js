// responsive header and nav
window.onload = function() {

  const navbarToggle = navbar.querySelector("#navbar-toggle");
  let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
  
  const navbarMenu = document.querySelector("#navbar-menu");
  const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
  
  const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
  };
  
  navbarToggle.addEventListener("click", toggleNavbarVisibility);
  
  navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
  navbarMenu.addEventListener("click", toggleNavbarVisibility);
  
  // nav bar solid color on scroll
  window.onscroll = function() {scrollFunction()};
   
  function scrollFunction() {
    if (document.body.scrollTop > 436 || document.documentElement.scrollTop > 436) {
      
      document.getElementById("navbar").style.background = "rgba(0, 0, 0, 100)";
  
    } else {
     
      document.getElementById("navbar").style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))";
    }
  }
  
  // API call for header movie trailer
  const apiKey = "";
  
  fetch(`https://api.themoviedb.org/3/movie/550?videos&language=en-US&api_key=${apiKey}`)
    .then((res) => {
      console.log('response', res);
      return res.json();
    })
      .then((data) => {
        console.log('data', data);
        // const trailerKey = data.id;
        const trailerKey = '6JnN1DmbqoU';
        console.log('trailerKey', trailerKey);
        const trailerUrl = 'https://www.youtube.com/embed?v=${trailerKey}';
        console.log('Trailer URL:', trailerUrl);
      
        const markup = `<div>
        <iframe width="1080" height="315" src="${trailerUrl}" frameBorder="0"></iframe>
        </div>
        <br><br>`;
  
        document.querySelector("#videopreview").insertAdjacentHTML("beforeend", markup);
      })
    .catch((err) => {
      console.log('Error fetching movie trailer', err);
    });
    console.log("Page Loaded!");
  };
  
  // API call for movies
  // const apiKey = "77935b2b10a58365e739782a55c23053";
  // const movie_id = 
  // fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}&append_to_response=videos,images`)
  //   .then((res) => {
  //     console.log('response', res);
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     data.results.forEach((movie) => {
  //       const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  //       const markup = `<div>
  //       <h2>${movie.title}</h2> 
  //       <p><em>Release Date: ${movie.release_date}</em></p><br>
  //       <p>Overview: ${movie.overview}</p><br>
  //       <img src="${backdropUrl}" alt="${movie.title} Backdrop">
  //       </div>
  //       <br><br>`;
        
  //       document.querySelector("#movies").insertAdjacentHTML("beforeend", markup);
  //     });
  //   })  
  //   .catch((err) => {
  //     console.log('Error fetching movie trailer', err);
  //   });
  //   console.log("Page Loaded!");
  // };
