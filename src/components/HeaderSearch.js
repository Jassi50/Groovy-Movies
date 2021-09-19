//import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//import { API_KEY } from '../utilities/globals';
import SearchForm from './SearchForm';
//import Movies from './Movies';
import useGlobal from '../store/globalAppStorage';
//import useGlobal from '../store/globalAppStorage';


function HeaderSearch({ className }) {
    const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];


    const location = useLocation();

    // function useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }
    // const [search, setSearch] = useState(null);
    const history = useHistory();
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
    // useEffect(() => {
    //     if (query === null || query === '') {
    //         return;
    //     };

    //     //let isMounted = true;

    //     const queryURIEncoded = encodeURIComponent(query);
    //     //console.log('from Header Search', query);


    //     async function fetchMovies(q) {
    //         const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`);
    //         let data = await res.json();
    //         let first12Movies = data.results.splice(0, 12);
    //         // console.log('from HeaderSearch', first12Movies);
    //         //setMovieData(first12Movies);
    //         // if (isMounted) {
    //         //     //globalActions.setSearchResults(first12Movies);
    //         // }
    //         handleSearch(first12Movies);

    //     }

    //     fetchMovies(queryURIEncoded);

    //     //return () => { isMounted = false; }

    // }, [handleSearch, query]);

    // async function fetchMovies(q) {
    //     const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${q}&page=1&include_adult=false`);
    //     let data = await res.json();
    //     let first12Movies = data.results.splice(0, 12);
    //     // console.log('from HeaderSearch', first12Movies);
    //     //setMovieData(first12Movies);
    //     globalActions.setSearchResults(first12Movies);
    // }

    function updateAddressBar(q) {
        //console.log('query received from form...');
        //console.log(q);
        q = q.trim();

        console.log('GS', globalState.currentURL);

        console.log('USE LOCATION PATH', location.pathname);

        if (q === '') {
            //setInputError('No search term entered')
            //setMovieData(null);
            //globalActions.setSearchResults(null);




            if (globalState.currentURL === '/') {
                console.log('hello')
                history.push('/')
            } else {
                console.log('FROM IF', globalState.currentURL);
                history.push(`/${globalState.currentURL}`);
            }


        } else {
            history.push(`/search/?query=${q}`);
        }


    }

    return (
        // <main>
        //     <section>
        //         <SearchForm handleSubmit={updateAddressBar} />
        //         {/* {noMoviesMessage()} */}
        //         {/* {movieData !== null && <Movies movieData={movieData} />} */}
        //     </section>
        // </main>
        <div className={className}>
            {/* {console.log('From HS Render', globalState.currentURL)} */}
            <SearchForm handleSubmit={updateAddressBar} />
        </div>
    );

}
export default HeaderSearch;