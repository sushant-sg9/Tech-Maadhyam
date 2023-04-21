import React, { useState } from "react";
import MovieResult from "./Components/MovieResult";
import Pagination from "./Components/Pagination";
import axios from "axios";
import './App.css';
const MovieSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchKeyword}&apikey=7b422c76`);
      const data = response.data;
      setMovieResults(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const moviesPerPage = 8;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieResults.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div>
      <div className="movie-search">
        <input type="text" placeholder="Search Movie With Word" value={searchKeyword} onChange={handleSearchKeywordChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {currentMovies.map((movie) => (
          <MovieResult key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        moviesPerPage={moviesPerPage}
        totalMovies={movieResults.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MovieSearch;
