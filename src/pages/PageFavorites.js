import useGlobal from '../store/globalAppStorage';
import Movies from '../components/Movies';




function PageFavorites() {
    
    const [globalState] = useGlobal();

    return (
        <section className="favorites-page">
            <div className="favorites-text-container">
                <h2 className="favorites-header">Favorites</h2>
                {/* Conditionally rendering the favorite movie cards, if there's no movies tell the user there is no movies */}
                {globalState.favorites.length === 0 ?
                <p>You currently have 0 movies. Click the Heart icon in the home page to favorite a movie</p> : 
                <p>You currently have {globalState.favorites.length} favorite movies.</p>
                }
            </div>
                {globalState.favorites.length !== 0 &&
                <Movies movieData={globalState.favorites} />
                }
        </section>
    )
}

export default PageFavorites
