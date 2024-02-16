import React, { useEffect, useState } from 'react'
import styles from "./MoviesPage.module.css";
import { MoviesChild } from '../../components/moviesChild/MoviesChild';

export const MoviesPage = ({movie, setMovie}) => {
  const [movieData, setMovieData] = useState([])

  const fetchMovieData = async(search) => {
    try{
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=${import.meta.env.VITE_MOVIE_API_KEY}`
      );
      const data = await response.json();
      setMovieData(data.Search)
    }catch(error){
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchMovieData(movie)
  }, [movie])
  

  return (
    <div className={styles.movieParent}>
      { !movieData ? (
          <h1>Oops.....  Not Found!</h1>
        ) : (
          movieData?.map((data) => {
            return <MoviesChild  key={data.imdbID}{...data}/>
          })
        )
      }
    </div>
  )
}
