import "./Movie.css"
export default function Movie(props){


    const {id,rating,imgURL,title,genres,year} =props.movie
    const deleteMovie = props.deleteMovie



    return (
      <div className="movie card">
        {/* conditional rendering with logical && operator */}
        {rating >= 8 && <h3 className="triangle">Recommended</h3>}

        {/* conditional rendering with ternary expresssion */}
        {imgURL ? (
          <img className="poster" src={imgURL} alt="movie.poster" />
        ) : (
          <img className="poster"  src="https://via.placeholder.com/182x268" alt="movie.poster" />
        )}
        
        <div className="mov-det-container">

          <h2>{title}</h2>
          {/* <h3>Genre: {movie.genres.map((genre,index)=>(<span key={index}>{genre} &nbsp;</span>))} </h3> */}
          <h3>Genre: {genres.join(", ")}</h3>
          <h3>Year:{year}</h3>
          <h3>Rating: {rating}</h3>
          <button className="btn"
            onClick={() => {
              deleteMovie(title);
            }}
          >
            Delete
          </button>

        </div>
      </div>
    );
}