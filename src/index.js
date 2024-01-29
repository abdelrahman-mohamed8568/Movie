import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
