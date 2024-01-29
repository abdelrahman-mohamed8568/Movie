import React, { useEffect, useState } from "react";
import star from "../images/Star.gif";
import { useParams } from "react-router-dom";
import ApiKey from "../components/ApiKey";
import Trailer from "../components/Trailer";

function MovieDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiLink = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`;
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  const apiCover = `https://image.tmdb.org/t/p/w400`;
  return (
    <>
      {data ? (
        <div className="detailsBox">
          <img
            src={`${apiCover}${data.poster_path}`}
            alt={data.title}
            className="movieCover"
          />
          <div className="coverShadow"></div>
          <div className="info">
            <div className="leftInfo">
              <img
                src={`${apiCover}${data.poster_path}`}
                alt={data.title}
                className="movieImg"
              />
              <h6>Release Date: {data.release_date}.</h6>
              <div className="ratings">
                {data.vote_average ? (
                  <h4> Ratings: {data.vote_average.toFixed(1)}</h4>
                ) : null}
                <img src={star} alt="" />
              </div>
            </div>
            <div className="rightInfo">
              <h1>{data.title}</h1>
              <div>
                {data.genres &&
                  data.genres.map((genre, index) => (
                    <h5 key={index}>#{genre.name}</h5>
                  ))}
              </div>
              <span>Language: {data.original_language}.</span>
              {data.homepage ? (
                <a
                  href={data.homepage}
                  className="movieSite"
                  target="_blank"
                  rel="noreferrer"
                >
                  Movie Site 🎗️
                </a>
              ) : (
                <button className="movieSite" disabled>
                  Site not available 🚫
                </button>
              )}
            </div>
          </div>
          <div className="Overview">
            <div className="video">
              <Trailer videoId={id} />
            </div>
            {data.overview ? (
              <p>
                <strong>Overview</strong> <br />
                {data.overview}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <p> There is a problem with the source 🚫</p>
      )}
    </>
  );
}

export default MovieDetails;
