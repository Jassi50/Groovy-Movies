import noPoster from '../images/no-movie-poster.jpg';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';
import genres from '../utilities/globals';

//movieObj is a prop passed from Movies it is the object that stores all the values
function MovieCard({ movieObj }) {
    function displayRating(rating) {
        
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

    function displayRatingPercent(rating){
        return `${rating * 10}%`;
    }

    function displayGenre(genreList){
        let x;
        let y;
        let genreString = "";
        //search the quotes array for a match of the id within the passed genres of array of the movie object
        for(x = 0; x < genreList.length; x++){
            for(y = 0; y < genres.length; y++){
                // if genres from OBJ === genres from objects json
                if (genreList[x] === genres[y].id){
                    if(x === genreList.length - 1){
                        //if were at the last genre being checked don't append a comma
                        genreString += `${genres[y].name}`;
                    }
                    else {
                        genreString += `${genres[y].name}, `;
                    }
                }
            }
        }
        return genreString;
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
                            <div className="hover-info">
                            <h2>{movieObj.title}</h2>
                                <p>Rated: {displayRatingPercent(movieObj.vote_average)}</p>
                                <p>Produced: {movieObj.release_date}</p>
                                <p>Genre: {displayGenre(movieObj.genre_ids)}</p>
                                <p>{movieObj.overview}</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="movie-info">
                <p>{movieObj.title}</p>
                <FavoriteButton movieObj={movieObj} />
                <div className="rating">
                    <p>Rating:</p>
                    <p className="movie-rating">{displayRating(movieObj.vote_average)}</p>
                </div>
                <button className="card-button"><Link to={`/movie/${movieObj.id}`}>More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
