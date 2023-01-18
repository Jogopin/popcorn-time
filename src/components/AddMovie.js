import { useState } from "react"

export default function AddMovie(props){
    const {setMoviesArray} = props
    const [newMovieRating,setNewMovieRating] = useState("")
    const[newMovieTitle,setNewMovieTitle]=useState("")
    const[newMovieImgURL,setNewMovieImgURL] =useState("")
    
  const handleSubmit = (e)=>{

    e.preventDefault();    

    const newMovie = {
      
      "title": newMovieTitle,
      "year": 2000,
      "imgURL":newMovieImgURL,
      "genres": ["Action", "Adventure", "Drama"],
      "rating": newMovieRating
    };


    setMoviesArray((prevMoviesArray)=>{
      return [newMovie,...prevMoviesArray]
    });

    //clear form
    setNewMovieTitle("")
    setNewMovieRating("")
    setNewMovieImgURL("")
  }


    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            required
            placeholder="enter the title"
            value={newMovieTitle}
            onChange={(e) => {
              setNewMovieTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Rating
          <input
            type="number"
            min="1"
            max="10"
            placeholder="5"
            name="rating"
            value={newMovieRating}
            onChange={(e) => {
              setNewMovieRating(e.target.value);
            }}
          />
        </label>
        <label>
          Url
          <input
            type="url"
            name="imgURL"
            placeholder="Url of the poster"
            value={newMovieImgURL}
            onChange={(e) => {
              setNewMovieImgURL(e.target.value);
            }}
          />
        </label>
        <button>create</button>
      </form>
    );
}