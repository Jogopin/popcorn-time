import "./Main.css"
import moviesFromJson from "../data/movies.json"
import { useState } from "react"


export default function Main(){
   
    
    const [moviesArray,setMoviesArray] = useState(moviesFromJson)

    const deleteMovie = (id) => {
        const newListOfMovies = moviesArray.filter(movie=>(movie.id!==id))
        setMoviesArray(newListOfMovies)
    }

    return(
    <div className="Main">
    {moviesArray.length>0 ? <h2> Current number of movies: {moviesArray.length}</h2> : <h2>there are no movies, Sorry.</h2>}
        <div className="movies-list">

            {moviesArray.map(movie=>{
                return (
                    <div className="movie card" key={movie.id}>
                        <img src= {movie.imgURL} alt="movie.poster"/>
                        <h2>{movie.title}</h2>
                        {/* <h3>Genre: {movie.genres.map((genre,index)=>(<span key={index}>{genre} &nbsp;</span>))} </h3> */}
                        <h3>Genre2: {movie.genres.join(", ")}</h3>
                        <h3>Year:{movie.year}</h3>
                        <h3>Rating: {movie.rating}</h3>
                        <button onClick={()=>{ deleteMovie(movie.id) }} >Delete this movie</button>
                    </div>
                )
            })}

        </div>
        
    </div>
)}