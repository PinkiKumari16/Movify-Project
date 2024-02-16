import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MoviesPage } from './pages/moviesPage/MoviesPage'
import SingleMoviePage from './pages/singleMovie/SingleMoviePage'
import { Navbar } from './components/navbar/Navbar'

function App() {
  const [movie, setMovie] = useState("avengers");
  return (
    <>
      <BrowserRouter>
        <Navbar movie={movie} setMovie={setMovie}/>
        <Routes>
          <Route path='/' element={<MoviesPage movie={movie} setMovie={setMovie} />} />
          <Route path='/:id' element={<SingleMoviePage />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
