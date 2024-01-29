import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.ico";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [activeToggle, setActiveToggle] = useState(false);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  const toTop = () => {
    window.scrollTo({ top: 0 });
    setActiveToggle(false);
  };
  return (
    <>
      <header className={`${activeToggle === true ? "headerToggle" : ""}`}>
        <div className="headerBox">
          <Link
            to="/"
            className={`headerLink ${activeLink === "/" ? "active" : ""}`}
            onClick={toTop}
          >
            <img src={Logo} alt="..." className="icon" />
            <h3>
              <span className="pop">Pop</span> Movie
            </h3>
          </Link>
          <div className="searchBox">
            <i className="bi bi-search"></i>
            <SearchBar />
          </div>
        </div>
        <ul className={`${activeToggle === true ? "ulToggle" : ""}`}>
          <li>
            <Link
              to="/"
              className={`headerLink ${activeLink === "/" ? "active" : ""}`}
              onClick={toTop}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/popular"
              className={`headerLink ${
                activeLink === "/popular" ? "active" : ""
              }`}
              onClick={toTop}
            >
              Most Popular
            </Link>
          </li>
          <li>
            <Link
              to="/top_rated"
              className={`headerLink ${
                activeLink === "/top_rated" ? "active" : ""
              }`}
              onClick={toTop}
            >
              Top Rated
            </Link>
          </li>
          <li>
            <Link
              to="/now_playing"
              className={`headerLink ${
                activeLink === "/now_playing" ? "active" : ""
              }`}
              onClick={toTop}
            >
              Now Playing
            </Link>
          </li>
          <li>
            <Link
              to="/upcoming"
              className={`headerLink ${
                activeLink === "/upcoming" ? "active" : ""
              }`}
              onClick={toTop}
            >
              Upcoming
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`headerLink ${
                activeLink === "/about" ? "active" : ""
              }`}
              onClick={toTop}
            >
              ABOUT
            </Link>
          </li>
        </ul>
        <input
          type="checkbox"
          id="checkbox"
          checked={activeToggle}
          onChange={() => setActiveToggle(!activeToggle)}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </header>
    </>
  );
}

export default Header;
