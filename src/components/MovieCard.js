import poster from '../images//godzilla-vs-kong-demo-poster.jpg';
import { Link } from 'react-router-dom';

function MovieCard() {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={poster} alt="Godzilla vs King Kong" />
            </div>
            <div className="movie-info">
                <h3>Godzilla vs King Kong</h3>
                <Link to="/">More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard
