import { debounce } from 'throttle-debounce';
import { FaSearch } from "react-icons/fa";

function SearchForm({ handleSubmit }) {

    const getMoviesThrottled = debounce(500, getMovies);

    function submitSearch(e) {
        e.preventDefault();
        getMovies(e.target.elements.searchMovies.value);
    }

  

    function getMovies(q) {
        handleSubmit(q);
    }

    return (
        <form onSubmit={submitSearch}>
            <input type="search" id="search-movies" name="searchMovies"  placeholder="Search....." />
            <label htmlFor="search-movies"></label>
            <button className="search-button" type="submit"><FaSearch /></button>
        </form>
    );

}
export default SearchForm;