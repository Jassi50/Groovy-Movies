import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { API_TOKEN } from '../utilities/globals';
import SingleMovie from '../components/SingleMovie';

function PageSingleMovie() {

    const [movieData, setMovieData] = useState(null);

    //use params allows us to access /movie/:id from react router, every movie has movieObj has an associated ID that can be used by the API to make URL request for a single movie
    const { id } = useParams();
    
    useEffect(() => {

        const fetchMovie = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            setMovieData(rawMovieData);

        }

        fetchMovie();

    }, [id]);

    return (
        <section className="single-movie-page">
            {movieData !== null && <SingleMovie movieObj={movieData} />}
        </section>
    )
}

export default PageSingleMovie;
