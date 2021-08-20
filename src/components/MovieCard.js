import poster from '../images/godzilla-vs-kong-demo-poster.jpg';
import { Link } from 'react-router-dom';

function MovieCard() {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={poster} alt="Godzilla vs King Kong" />
            </div>
            <div className="movie-info">
                <p>Godzilla vs King Kong</p>
                <p>date</p>
                <button className="card-button"><Link to="/">More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
