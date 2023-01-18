
import './App.css';
import moviesFromJson from "./data/movies.json"
import { useState } from "react"

import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import AddMovie from './components/AddMovie';

function App() {

  const [moviesArray,setMoviesArray] = useState(moviesFromJson)

  const [searchQuery,setSearchQuery] = useState("")
 
  const moviesToDisplay = moviesArray.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  const deleteMovie = (titleToDelete) => {
    const newListOfMovies = moviesArray.filter((movie) => movie.title !== titleToDelete);
    setMoviesArray(newListOfMovies);
  };



  return (
    <div className="App">
      <Header moviesArray={moviesToDisplay} />
      <AddMovie setMoviesArray={setMoviesArray} moviesArray={moviesArray} />

      <form>
        <label>
          <input
            type="text"
            name="searchQuery"
            placeholder="search by title"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </label>
      </form>

      <Main
        moviesArray={moviesToDisplay}
        setMoviesArray={setMoviesArray}
        deleteMovie={deleteMovie}
      />

      <Footer />
    </div>
  );
}

export default App;
