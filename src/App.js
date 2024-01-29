import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import MostPopular from "./pages/MostPopular";
import Footer from "./pages/Footer";
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} end />
            <Route path="/popular" element={<MostPopular />} end />
            <Route path="/top_rated" element={<TopRated />} end />
            <Route path="/now_playing" element={<NowPlaying />} end />
            <Route path="/upcoming" element={<Upcoming />} end />
            <Route path="/Movie/:id" element={<MovieDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
