import React from "react";
import Cards from "../components/Cards";

function Upcoming() {
  return (
    <>
      <div className="textBox">
        <h1 className="frontText">Upcoming</h1>
        <h2 className="backText">Upcoming</h2>
      </div>
      <Cards typeMovies={"upcoming"} />
    </>
  );
}

export default Upcoming;
