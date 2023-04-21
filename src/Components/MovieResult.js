import React, { useState } from "react";
import './MovieResult.css'


const MovieResult = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState('');
  const handleClick = () => {
    setOpen(true);
  };
  const handelRate = () => {
    setOpen(false);
  };

  const generateRatingStars = () => {
    const ratingValue = parseInt(rating);
    const fullStars = "★".repeat(ratingValue);// unicode star
    const emptyStars = "☆".repeat(5 - ratingValue);
    const stars = fullStars + emptyStars;
    return <span style={{ color: 'yellow' }}>{stars}</span>;
  };
 

  return (
    <div className="movie-result">
      <img src={movie.Poster} alt={movie.Title} onClick={() => handleClick(movie)} />
      <div>
       <h3>Rating: {generateRatingStars()}</h3>
        <h3>{movie.Title}</h3>
        <h4>{movie.Year}</h4>
        <h4>Type: {movie.Type}</h4>
        <h4>IMDb ID: {movie.imdbID}</h4>
      </div>
      {open && (
          <div>
            <form onSubmit={handelRate}>
          <label>
            Name:
            <input type="text" placeholder="Enter your Name" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your Email" name="email" required />
          </label>
          <label>
            Mobile Number:
            <input type="tel" name="mobileNumber" placeholder="Enter Mobile Number" required />
          </label>
          <label>
            Watching Date:
            <input type="date" name="date" required />
          </label>
            Rating:
            <select onChange={(e) => setRating(e.target.value)} required>
              <option value="">-- Select a rating --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button>Save</button>
            </form>
          </div>
      )}
    </div>
  );
};

export default MovieResult;
