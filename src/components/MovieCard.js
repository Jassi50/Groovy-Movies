import noPoster from '../images/no-movie-poster.jpg';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';

//movieObj is a prop passed from Movies it is the object that stores all the values
function MovieCard({ movieObj }) {
    console.log(movieObj);
    function displayRating(rating) {
        console.log(rating);
        
        /*
        switch (rating){
            case (rating > 0 && rating <= 2) : {
                return "⭐";
            }
            case (rating >= 2.1 && rating <= 4) : {
                return "⭐⭐";
            }
            case (rating >= 4.1 && rating <= 6) : { 
                return "⭐⭐⭐";
            }
            case (rating >= 6.1 && rating <= 8) : {
                return "⭐⭐⭐⭐";
            }
            case (rating > 8) : {
                return "⭐⭐⭐⭐⭐";
            }
            default: {
                return "No rating available";
            }
        }
        */
        if(rating > 0 && rating <= 2){
            return "⭐";
        }
        else if (rating >= 2.1 && rating <= 4) {
            return "⭐⭐";
        }
        else if (rating >= 4.1 && rating <= 6) {
            return "⭐⭐⭐";
        }
        else if (rating >= 6.1 && rating <= 8) {
            return "⭐⭐⭐⭐";
        }
        else if (rating >= 8 && rating <= 10) {
            return "⭐⭐⭐⭐⭐";
        }
        else {
            return "N/A";
        }
        
    }
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
                            <div className="hover-info1">
                                <p>Rated: </p>
                                <p>Produced: {movieObj.release_date}</p>
                                <p>Genre: </p>
                                <p>Duration:</p>
                            </div>
                            <div className="hover-info2">
                                <p>{movieObj.overview}</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="movie-info">
                <p>{movieObj.title}</p>
                <p className="movie-rating">{displayRating(movieObj.vote_average)}</p>
                <FavoriteButton movieObj={movieObj} />
                <button className="card-button"><Link to={`movie/${movieObj.id}`}>More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
