import noPoster from '../images/no-movie-poster.jpg';
import { Link } from 'react-router-dom';

//movieObj is a prop passed from Movies it is the object that stores all the values
function MovieCard({movieObj}) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
            {
                movieObj.poster_path === null ? 
                <img src={noPoster} alt="No poster is available" /> :
                <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
            }
            </div>
            <div className="movie-info">
                <p>{movieObj.title}</p>
                <p>{movieObj.release_date}</p>
                <button className="card-button"><Link to={`movie/${movieObj.id}`}>More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
