import { useState } from 'react';
import { useEffect } from 'react';
import Movies from '../components/Movies';
import { API_TOKEN } from '../utilities/globals';

//sort prop is passed from react router and it can vary based on the route
function PageHome({ sort }) {

    const [movieData, setMovieData] = useState(null);

    //this use effect function runs whenever PageHome is mounted or when sort changes sort is passed to this function as a prop
    useEffect(() => {

        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 12);
            setMovieData(rawMovieData);
        }
        fetchMovies();
    }, [sort]);



    return (
        <section className="home-page">
            {/* <NavSort /> */}
            {/* Display movie data if there's movie data to display*/}
            {movieData !== null && <Movies movieData={movieData} />}
        </section>
    )
}

export default PageHome
