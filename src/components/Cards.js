import React, { useEffect, useState } from "react";
import ApiKey from "./ApiKey";
import Card from "./Card";

function Cards({ typeMovies }) {
  const [page, setPage] = useState(1);
  const apiLink = `https://api.themoviedb.org/3/movie/${typeMovies}?api_key=${ApiKey}&page=${page}`;
  const [data, setData] = useState([]);
  const nextPage = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0 });
  };
  const previousPage = () => {
    setPage(page - 1);
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [apiLink]);
  return (
    <>
      <Card data={data} />
      <div>
        {page > 1 && (
          <button className="pageButton" onClick={previousPage}>
            {`${page - 1} <-`}
          </button>
        )}
        <button className="pageButton" id="disabledButton" disabled>
          {page}
        </button>
        <button className="pageButton" onClick={nextPage}>
          {`-> ${page + 1}`}
        </button>
      </div>
    </>
  );
}

export default Cards;
