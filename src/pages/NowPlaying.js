import React from "react";
import Cards from "../components/Cards";

function NowPlaying() {
  return (
    <>
      <div className="textBox">
        <h1 className="frontText">Now Playing</h1>
        <h2 className="backText">Now Playing</h2>
      </div>
      <Cards typeMovies={"now_playing"} />
    </>
  );
}

export default NowPlaying;
