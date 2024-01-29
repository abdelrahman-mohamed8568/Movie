import React from "react";
import Logo from "../images/Logo.ico";
import Ps from "../images/ps.png";

function About() {
  return (
    <>
      <div className="about">
        <img src={Ps} alt="..." className="ps" />
        <div className="screens">
          <h1> About Us </h1>
          <div id="logo">
            <img src={Logo} alt="..." />
            <strong>
              <span className="pop">Pop</span> Movie
            </strong>
          </div>
        </div>
        <p>
          Pop Movie is a react demo that I created using TMDB-API. Thank you for
          your interest in watching my project.
        </p>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/abdelrahman-mohamed-986294240/"
            className="contact1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/abdelrahman-mohamed8568"
            className="contact2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:abdelrahman.mohamed8568@gmail.com"
            className="contact3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-envelope-check-fill"></i>
          </a>
          <a
            href="https://wa.me/+201110828568"
            className="contact4"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
