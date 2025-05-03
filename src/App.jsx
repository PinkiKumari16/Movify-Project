import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesPage } from "./pages/moviesPage/MoviesPage";
import SingleMoviePage from "./pages/singleMovie/SingleMoviePage";
import { Navbar } from "./components/navbar/Navbar";
import { FavoritesMovies } from "./pages/favoritesMovies/FavoritesMovies";

function App() {
  const [movie, setMovie] = useState("avengers");
  const [savedMovies, setSaveMovies] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar movie={movie} setMovie={setMovie} />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesPage
                movie={movie}
                setMovie={setMovie}
                savedMovies={savedMovies}
                setSaveMovies={setSaveMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <FavoritesMovies
                savedMovies={savedMovies}
                setSaveMovies={setSaveMovies}
              />
            }
          />
          <Route path="/Movies/:id" element={<SingleMoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
