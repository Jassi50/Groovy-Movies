// Global APP state used for favorites
import React from 'react';
import globalHook from 'use-global-hook';

//Get favorite movies from local storage
function getFavorites(){
    let favoritesFromStorage = localStorage.getItem('movie-app-favorites');

    if(favoritesFromStorage === null){
        favoritesFromStorage = []; //if there's no favorites stored set favoritesFromStorage to an empty array
    }
    else{
        favoritesFromStorage = JSON.parse(favoritesFromStorage); //convert local storage string data into object
    }
    return favoritesFromStorage
}

//updater actions


const actions = {
    addFavorite: (store, movieObj) => {
        //add the movie data to an array
        const newFavorites = [...store.state.favorites, movieObj]
        // convert the array to a string so it can be saved into local storage (local data is all strings)
        const newFavoritesForStorage = JSON.stringify(newFavorites);
        localStorage.setItem('movie-app-favorites', newFavoritesForStorage);
        //update global favorites state
        store.setState({ favorites: newFavorites }); // global state cannot be updated directly which is why this is done
    },
    removeFavorite: (store, id) => {
        //get current favorites
        let currentFavorites = store.state.favorites;
        //get movie index using findIndex() returns the index location of the current movie within the array when the id of the array matches that of the given current favorite
        const indexOfMovieToRemove = currentFavorites.findIndex((movieObj) => movieObj.id === id); 
        //remove movie using splice (since local storage is string data)
        currentFavorites.splice(indexOfMovieToRemove, 1)
        let favoritesForStorage = JSON.stringify(currentFavorites);//stringify the new array
        localStorage.setItem('movie-app-favorites', favoritesForStorage);
        
        store.setState({ favorites: currentFavorites }); //update global favorites state
    },
    setFavorites: (store) => {
        store.setState({favorites: getFavorites()})
    }
}

const initialState = {
    favorites: getFavorites()
}


const useGlobal = globalHook(initialState, actions);

export default useGlobal;