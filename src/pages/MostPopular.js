import React from "react";
import Cards from "../components/Cards";

function MostPopular() {
  return (
    <>
      <div className="textBox">
        <h1 className="frontText">Most Popular</h1>
        <h2 className="backText">Most Popular</h2>
      </div>
      <Cards typeMovies={"popular"} />
    </>
  );
}

export default MostPopular;
