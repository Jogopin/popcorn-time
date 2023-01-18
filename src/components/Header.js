import "./Header.css"
export default function Header(props){

    const moviesArray =props.moviesArray


    
    const titleMessage = moviesArray.length>0 ? <h2> Current number of movies: {moviesArray.length}</h2> : <h2>there are no movies, Sorry.</h2>
    
    
    return (
    <div className="Header">
        {titleMessage}
    
    </div>)
}