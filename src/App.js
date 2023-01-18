
import './App.css';
import moviesFromJson from "./data/movies.json"
import { useState } from "react"

import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [moviesArray,setMoviesArray] = useState(moviesFromJson)

  const deleteMovie = (id) => {

    const newListOfMovies = moviesArray.filter(movie=>(movie.id!==id))
    setMoviesArray(newListOfMovies)
}

  return (
    <div className="App">
      <Header moviesArray={moviesArray} />
      <Main
        moviesArray={moviesArray}
        setMoviesArray={setMoviesArray}
        deleteMovie={deleteMovie}
      />
      <Footer />
    </div>
  );
}

export default App;
