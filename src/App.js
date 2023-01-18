
import './App.css';
import moviesFromJson from "./data/movies.json"
import { useState } from "react"

import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import AddMovie from './components/AddMovie';

function App() {

  const [moviesArray,setMoviesArray] = useState(moviesFromJson)

 


  const deleteMovie = (titleToDelete) => {
    const newListOfMovies = moviesArray.filter((movie) => movie.title !== titleToDelete);
    setMoviesArray(newListOfMovies);
  };



  return (
    <div className="App">
      <Header moviesArray={moviesArray} />
      <AddMovie
        setMoviesArray={setMoviesArray}
        moviesArray={moviesArray}
      />
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
