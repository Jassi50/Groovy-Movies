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

    // show movies if search terms entered
    useEffect(() => {
        if (query === null || query === '') {
            return;
        };
        const queryURIEncoded = encodeURIComponent(query);
        fetchMovies(queryURIEncoded);
    }, [query]);

    // Call the first 12 results from the api
    async function fetchMovies(q) {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`);
        let data = await res.json();
        let first12Movies = data.results.splice(0, 12);
        setMovieData(first12Movies);
    }

    // store and trim the search terms
    function updateAddressBar(q) {
        q = q.trim();

        if (q === '') {
            setInputError('No search term entered')
            setMovieData(null);
            console.log(inputError);
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
                {movieData !== null && <Movies movieData={movieData} />}
            </section>
        </main>
    );

}
export default Search;