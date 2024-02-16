import React from 'react'
import styles from "./SingleMovieComponent.module.css";

export const SingleMovieComponent = ({Title,
    Year,
    Rated,
    Released, 
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice
    }) => {
  return (
    <div className={styles.movieCard}>
        <img src={Poster}  alt='Not Found' className={styles.poster} />
        <div className={styles.details}>
            <h1>{Title}</h1>
            <div className={styles.ratingAndType}>
                <h4 className={styles.movieType}>
                    <span>{Type}</span>
                </h4>
                <h4 className={styles.movieRating}>
                    <span>imdb Rating: {imdbRating}</span>
                </h4>
            </div>
            <p><span>Year: </span>{Year}</p>
            <p><span>Rated: </span>{Rated}</p>
            <p><span>Released: </span>{Released}</p>
            <p><span>Runtime: </span>{Runtime}</p>
            <p><span>Genre: </span>{Genre}</p>
            <p><span>Director: </span>{Director}</p>
            <p><span>Writer: </span>{Writer}</p>
            <p><span>Actors: </span>{Actors}</p>
            <p><span>Plot: </span>{Plot}</p>
            <p><span>Language </span>{Language}</p>
            <p><span>Country: </span>{Country}</p>
            <p><span>Awards: </span>{Awards}</p>
            <p><span>Meta Score: </span>{Metascore}</p>
            <p><span>Votes: </span>{imdbVotes}</p>
            <p><span>ID: </span>{imdbID}</p>
            <p><span>DVD: </span>{DVD}</p>
            <p><span>BoxOffice: </span>{BoxOffice}</p>
        </div>
    </div>
  )
}
