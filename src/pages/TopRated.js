import React from "react";
import Cards from "../components/Cards";

function TopRated() {
  return (
    <>
      <div className="textBox">
        <h1 className="frontText">Top Rated</h1>
        <h2 className="backText">Top Rated</h2>
      </div>
      <Cards typeMovies={"top_rated"} />
    </>
  );
}

export default TopRated;
