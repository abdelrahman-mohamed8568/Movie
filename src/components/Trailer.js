import React, { useEffect, useState } from "react";
import ApiKey from "./ApiKey";

function Trailer(props) {
  const videoId = props.videoId;
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const videoLink = `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${ApiKey}`;
    fetch(videoLink)
      .then((res) => res.json())
      .then((video) => {
        if (video.results && video.results[0]) {
          setVideo(video.results[0].key);
        } else {
          setVideo("");
        }
      });
  }, [videoId]);
  const videoLink = `https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1&controls=0`;
  return (
    <>
      {video ? (
        <iframe
          width="1000"
          height="500"
          src={videoLink}
          title="YouTube video"
        />
      ) : null}
    </>
  );
}

export default Trailer;
