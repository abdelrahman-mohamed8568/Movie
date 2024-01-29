import React from "react";
import CardContainer from "../components/CardContainer";

function Home() {
  return (
    <>
      <div className="coverContainer">
        <div>
          <h2>
            Welcome To <br />
            <strong>
              <span className="pop">Pop</span> Movie
            </strong>
          </h2>
          <h1>
            All Movies <br />
            <span>Are</span> Available <br />
            HERE
            <i className="bi bi-arrow-down-square"></i>
          </h1>
        </div>
      </div>
      <CardContainer name={"popular"} />
      <CardContainer name={"top_rated"} />
      <CardContainer name={"now_playing"} />
      <CardContainer name={"upcoming"} />
    </>
  );
}

export default Home;
