import React, { useEffect, useState } from "react";
import ApiKey from "../components/ApiKey";
import Card from "../components/Card";
import Modal from "react-bootstrap/Modal";

function SearchBar() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const changeSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${ApiKey}`;
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, [url]);
  return (
    <>
      <button onClick={() => setShow(true)} className="searchButton">
        Search
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        className="modal"
      >
        <Modal.Header closeButton className="searchHeader">
          <Modal.Title id="example-custom-modal-styling-title">
            <input
              placeholder="Search"
              value={search}
              onChange={changeSearch}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="searchBody">
          {search === "" ? (
            <div className="loaderBox">
              <div className="loader">
                <div className="loader__skeleton loader__title"></div>
              </div>
              <div className="loader">
                <div className="loader__skeleton loader__title"></div>
              </div>
            </div>
          ) : (
            <Card data={results} toggleShow={() => setShow(false)} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default SearchBar;
