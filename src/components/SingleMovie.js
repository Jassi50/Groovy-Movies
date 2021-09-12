import noPoster from '../images/no-movie-poster.jpg';
import FavoriteButton from './FavoriteButton';

function SingleMovie({ movieObj }) {

    return (
        <div className="single-movie">
            <div className="single-movie-content">
                <div className="single-movie-poster">
                {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                </div>
                <div className="single-movie-info">
                    <h2>{movieObj.title}</h2>
                    <FavoriteButton movieObj={movieObj} />
                    <p>{movieObj.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
