import noPoster from '../images/no-movie-poster.jpg';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';

//movieObj is a prop passed from Movies it is the object that stores all the values
function MovieCard({ movieObj }) {
    //console.log(movieObj);
    return (
        <div className="movie-card">
            <div>
                <div className="movie-poster">
                    <div className="movie-div">
                        {
                            movieObj.poster_path === null ?
                            <img src={noPoster} alt="No poster is available" /> :
                            <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                        }
                        <span className="hover-text"> 
                            <div className="hover-name">
                                <p>{movieObj.title}</p>
                            </div>
                           
                            <div className="hover-info">
                            <p>Rated: </p>
                                <p>Produced: {movieObj.release_date}</p>
                                <p>Genre: </p>
                                <p>Duration:</p>
                                <p>Rating:</p>
                                <p>{movieObj.overview}</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="movie-info">
                <p>{movieObj.title}</p>
                <p>{movieObj.release_date}</p>
                <FavoriteButton movieObj={movieObj} />
                <button className="card-button"><Link to={`movie/${movieObj.id}`}>More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
