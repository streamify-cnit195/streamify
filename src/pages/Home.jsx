import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestNowplaying} />
      {/* <Row rowID="2" title="TV - Airing Today" fetchURL={requests.requestAiringToday} /> */}
      <Row rowID="2" title="Trending Movies" fetchURL={requests.requestTrendingMovies} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default Home;

// simple-birds.surge.sh
//streamify-cnit195.surge.sh
