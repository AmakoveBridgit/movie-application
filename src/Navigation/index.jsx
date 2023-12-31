
import React, { useState } from "react";
import './style.css';
import { searchMovies } from "../utils/utilities";



const Navbar =() => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = async () => {
    const results = await searchMovies(searchValue);
    setSearchResults(results.results);
  };
  return (
    <div className="Navigation">
      <nav className="nav">
        <div>
          <h1 className="movie">
            M<span>oo</span>vie
          </h1>
        </div>
        <div className="search_button">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div>
          <li className="yellow-link"><a href="">Home</a></li>
        </div>
        <div>
        <h4 className="list">My list</h4>
        </div>
        <button className="sign-in-button"> Sign In</button>
      </nav>
        {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Navbar;



