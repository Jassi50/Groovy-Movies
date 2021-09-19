import { useState } from 'react';
import { useEffect } from 'react';
import Movies from '../components/Movies';
import { API_TOKEN, API_KEY } from '../utilities/globals';
import useGlobal from '../store/globalAppStorage';
import { useLocation } from 'react-router-dom';

//sort prop is passed from react router and it can vary based on the route
function PageHome({ sort }) {

    const [movieData, setMovieData] = useState(null);
    //const [homePageSearchResults, setHomePageSearchResults] = useState(searchResults)
    const globalStateAndGlobalActions = useGlobal();
    const globalState = globalStateAndGlobalActions[0];
    const globalActions = globalStateAndGlobalActions[1];
    //const [search, setSearch] = useState(null);

    let sortForURL;

    if (sort === 'home') {
        sortForURL = '/';
        sort = 'popular';
    } else {
        sortForURL = sort;
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery().get('query');

    //setSearch(query);

    //this use effect function runs whenever PageHome is mounted or when sort changes sort is passed to this function as a prop
    useEffect(() => {

        globalActions.setCurrentURL(sortForURL);
        //console.log(sortForURL);
        console.log('UE', globalState.currentURL);

        //console.log('Search Results from useEffect on Home Page', homePageSearchResults)

        console.log('QUERY FROM USE EFFECT', query);

        if (query !== null) {
            return;
        };

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

    }, [query, globalActions, sort, sortForURL, globalState.currentURL]);

    // function useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }

    //const query = useQuery().get('query');
    //const [movieData, setMovieData] = useState(null);
    //const [inputError, setInputError] = useState(null);

    // function noMoviesMessage() {
    //     if (movieData === null && inputError === null) {
    //         return <p>Enter a movie title in the form above to search for a movie...</p>
    //     } else if (movieData === null && inputError !== null) {
    //         return <p>{inputError}</p>
    //     } else if (movieData !== null && movieData.length === 0) {
    //         return <p>Sorry, no movies matched your search term...</p>
    //     }
    // }
    useEffect(() => {


        console.log('QUERY FROM SEARCH UE', query);

        if (query === null || query === '') {
            return;
        };

        //let isMounted = true;

        const queryURIEncoded = encodeURIComponent(query);
        //console.log('from Header Search', query);


        async function fetchMovies(q) {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`);
            let data = await res.json();
            let first12Movies = data.results.splice(0, 12);
            // console.log('from HeaderSearch', first12Movies);
            setMovieData(first12Movies);
            // if (isMounted) {
            //     //globalActions.setSearchResults(first12Movies);
            // }
            //handleSearch(first12Movies);

        }

        fetchMovies(queryURIEncoded);

        //return () => { isMounted = false; }

    }, [query]);

    return (
        <section className="home-page">
            {/* <NavSort /> */}
            {/* {console.log('From Home', globalState.searchResults)} */}
            {/* Display movie data if there's movie data to display*/}
            {console.log('QUERY', 'foo')}
            {movieData !== null && <Movies movieData={movieData} />}
        </section>
    )
}

export default PageHome
