import useGlobal from '../store/globalAppStorage';
import fullHeart from '../images/full-heart.jpeg';
import emptyHeart from '../images/empty-heart.svg';

//favorite button

function FavoriteButton( {movieObj} ) {

    const [globalState, globalActions] = useGlobal();

    function isFavorite(id){
        if( globalState.favorites.length === 0 ){
            return false;
        }

        return globalState.favorites.some((movieObj) => movieObj.id === id);
    }
    return (
        <div>
            {
                isFavorite(movieObj.id) ? 
                <button className="heart-icon"
                    onMouseDown={ (e) => {e.preventDefault();} }
                    onClick={() => { globalActions.removeFavorite(movieObj.id); }}>
                    <img src={fullHeart} alt="Full heart" />
                </button> : 
                <button className="heart-icon"
                    onMouseDown={ (e) => {e.preventDefault();} }
                    onClick={() => { globalActions.addFavorite(movieObj); }}>
                    <img src={emptyHeart} alt="Empty heart" />
                </button>
            }
        </div>
    );
}

export default FavoriteButton
