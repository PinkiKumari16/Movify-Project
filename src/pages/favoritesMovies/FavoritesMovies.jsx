import React, { useState } from "react";
import styles from "./FavoritesMovies.module.css";
import { MoviesChild } from "../../components/moviesChild/MoviesChild";

export const FavoritesMovies = ({ savedMovies, setSaveMovies }) => {
  return (
    <div className={styles.favoriteParent}>
      {!savedMovies.length ? (
        <h1>No Movies Saved ....</h1>
      ) : (
        savedMovies?.map((data) => {
          return (
            <MoviesChild
              key={data.imdbID}
              {...data}
              savedMovies={savedMovies}
              setSaveMovies={setSaveMovies}
            />
          );
        })
      )}
    </div>
  );
};
