import useGlobal from '../store/globalAppStorage';
import fullHeart from '../images/full-heart.png';
import emptyHeart from '../images/empty-heart.svg';
import { useEffect, useState } from 'react';

//favorite button

function FavoriteButton( {movieObj} ) {

    const [globalState, globalActions] = useGlobal();

    //check the favorites array upon component mount
    useEffect(() => {
        globalActions.setFavorites();
    }, [globalActions]);

    //this function checks if the movie is is present in the local storage array
    function isFavorite(id){
        if( globalState.favorites.length === 0 ){
            return false;
        }

        return globalState.favorites.some((movieObj) => movieObj.id === id);
    }
    
    // conditionally render the favorites button depending on wether the movieObj.id was found or not
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
