import MovieCard from './MovieCard';

//pass movie data as a prop from PageHome
function Movies({ movieData }) {
    return (
        <div className="movies-container">
            {/* Display a current movie for each instance of array.map */}
            {movieData.map((currentMovie, i) => <MovieCard key={i} movieObj={currentMovie} />)}
        </div>
    )
}

export default Movies
