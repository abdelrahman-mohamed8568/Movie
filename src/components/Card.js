import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const data = props.data;
  const toggleShow = props.toggleShow;
  const apiCover = `https://image.tmdb.org/t/p/w200`;
  const toTop = () => {
    window.scrollTo({ top: 0 });
    toggleShow && toggleShow();
  };
  return (
    <div className="cardsGrid">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={`${apiCover}${item.poster_path}`} alt={item.title} />
            <h6>{item.title}</h6>
            <Link
              to={`/Movie/${item.id}`}
              className="overlay"
              onClick={toTop}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
