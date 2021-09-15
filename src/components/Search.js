import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { API_KEY } from '../utilities/globals';
import SearchForm from './SearchForm';
import Movies from './Movies';


function Search() {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const history = useHistory();
    const query = useQuery().get('query');
    const [movieData, setMovieData] = useState(null);
    const [inputError, setInputError] = useState(null);

    function noMoviesMessage() {
        if (movieData === null && inputError === null) {
            return <p>Enter a movie title in the form above to search for a movie...</p>
        } else if (movieData === null && inputError !== null) {
            return <p>{inputError}</p>
        } else if (movieData !== null && movieData.length === 0) {
            return <p>Sorry, no movies matched your search term...</p>
        }
    }
    useEffect(() => {
        if (query === null || query === '') {
            return;
        };
        const queryURIEncoded = encodeURIComponent(query);
        fetchMovies(queryURIEncoded);
    }, [query]);

    async function fetchMovies(q) {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`);
        let data = await res.json();
        let first12Movies = data.results.splice(0, 12);
        console.log(first12Movies);
        setMovieData(first12Movies);
    }

    function updateAddressBar(q) {
        console.log('query received from form...');
        console.log(q);
        q = q.trim();

        if (q === '') {
            setInputError('No search term entered')
            setMovieData(null);
            history.push('/search');
            return;
        }
        history.push(`/search?query=${q}`);
    }

    return (
        <main>
            <section>
                <p>Hello!!!</p>
                <SearchForm handleSubmit={updateAddressBar} />
                {noMoviesMessage()}
                {movieData !== null && <Movies movieData={movieData} />}
            </section>
        </main>
    );

}
export default Search;