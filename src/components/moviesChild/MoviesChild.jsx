import React, { useState, useEffect } from "react";
import styles from "./MoviesChild.module.css";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Tooltip } from "@mui/material";

export const MoviesChild = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  savedMovies,
  setSaveMovies,
}) => {
  if (Poster === "N/A") return null; // Return null instead of undefined
  const navigate = useNavigate();

  // Check if the movie is already in favorites
  const isFavorate = savedMovies.some((movie) => movie.imdbID === imdbID);

  const handleFavoriteToggle = () => {
    if (isFavorate) {
      // Remove from favorites
      setSaveMovies((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
    } else {
      // Add to favorites
      const newFavorite = { Title, Year, imdbID, Type, Poster };
      setSaveMovies((prev) => [...prev, newFavorite]);
    }
  };
  return (
    <div className={styles.card}>
      <img src={Poster} alt="Not found" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>
          Title : <span> {Title} </span>
        </h3>
        <h4>
          Year : <span> {Year} </span>
        </h4>
        <div className={styles.movieTypeBox}>
          <h4 className={styles.movieType}>
            Type : <span> {Type.toUpperCase()} </span>
          </h4>
          {isFavorate ? (
            <Tooltip title="Remove From Favorite">
              <FavoriteIcon
                className="favoriteIcon"
                onClick={handleFavoriteToggle}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Add to Favorite">
              <FavoriteBorderIcon onClick={handleFavoriteToggle} />
            </Tooltip>
          )}
        </div>
        <h4
          className={styles.moreInfo}
          onClick={() => navigate("/movies/" + imdbID)}
        >
          More Info...
        </h4>
      </div>
    </div>
  );
};
