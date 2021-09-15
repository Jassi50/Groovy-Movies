import { debounce } from 'throttle-debounce';

function SearchForm({ handleSubmit }) {

    const getMoviesThrottled = debounce(500, getMovies);

    function submitSearch(e) {
        e.preventDefault();
        getMovies(e.target.elements.searchMovies.value);
    }

    function liveSearch(e) {
        getMoviesThrottled(e.target.value);
    }

    function getMovies(q) {
        handleSubmit(q);
    }

    return (
        <form className="form-search" onSubmit={submitSearch}>
            <div className="input-group input-group-search">
                <label htmlFor="search-movies">Search Movies: </label>
                <input type="search" id="search-movies" name="searchMovies" onChange={liveSearch} />
            </div>
            <div className="input-group input-group-submit">
                <input type="submit" value="Search" />
            </div>
        </form>
    );

}
export default SearchForm;