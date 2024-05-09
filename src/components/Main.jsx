import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);
  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full  h-[650px] text-white">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[40%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title} </h1>
          <div className="my-4">
            <button className="border bg-gray-300 hover:bg-gray-300/90 text-black py-2 px-5 rounded">
              Play
            </button>
            <button className="border hover:bg-gray-50/20 py-2 px-5 ml-4 rounded">
              Watch Later
            </button>
          </div>
          <p className=" text-gray-400 text-sm">Released: {movie?.release_date} </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
