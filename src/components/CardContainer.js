import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import ApiKey from "./ApiKey";
import Card from "./Card";

function CardContainer({ name }) {
  const apiLink = `https://api.themoviedb.org/3/movie/${name}?api_key=${ApiKey}`;
  const [data, setData] = useState([]);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiLink);
      const data = await res.json();
      setData(data.results);
    };
    fetchData();
  }, [apiLink]);
  return (
    <div id="cardContainer">
      <h1 className="frontText">{name}</h1>
      <h2 className="backText">{name}</h2>
      <div className="cards">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          centeredSlides={true}
          slidesPerView={20}
          loop={data.length}
          modules={[EffectCoverflow, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="SwiperSlide">
              <Card data={[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="buttonContainer">
        <Link to={name} className="homeButton" onClick={toTop}>
          See All
        </Link>
      </div>
    </div>
  );
}

export default CardContainer;
