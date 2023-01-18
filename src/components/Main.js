import "./Main.css"
// import moviesFromJson from "../data/movies.json"
// import { useState } from "react"
import Movie from "./Movie"


export default function Main(props){
    
    const moviesArray = props.moviesArray
    const setMoviesArray=props.setMoviesArray
    const deleteMovie=props.deleteMovie
    // const [moviesArray,setMoviesArray] = useState(moviesFromJson)

    
    const sortRatingAscending= ()=>{
        setMoviesArray((prevMovies)=>{
            const newArray= [...prevMovies]
            return newArray.sort((a,b)=>{return b.rating - a.rating})
        })
    }
    const sortRatingDescending= ()=>{
        setMoviesArray((prevMovies)=>{
             return [...prevMovies].sort((a,b)=>{return a.rating - b.rating})
        })
    }

    
    // const titleMessage = moviesArray.length>0 ? <h2> Current number of movies: {moviesArray.length}</h2> : <h2>there are no movies, Sorry.</h2>
    return(

    <div className="Main">
        {/* {titleMessage} */}
        <button onClick={sortRatingAscending}>Rating Ascending</button>
        <button onClick={sortRatingDescending}>Rating Descending</button>
        
        <div className="movies-list">

            {moviesArray.map(movie=>{
                return (
                  <Movie
                    key={movie.id}
                    movie={movie}
                    deleteMovie={deleteMovie}
                  />
                );
            })}

        </div>
        
    </div>
)}