//import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import { API_KEY } from '../utilities/globals';
import SearchForm from './SearchForm';
//import Movies from './Movies';
import useGlobal from '../store/globalAppStorage';
//import useGlobal from '../store/globalAppStorage';


function HeaderSearch({ className }) {
    const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    const history = useHistory();

    function updateAddressBar(q) {
        //q is equal the the trimed user input from the search form
        q = q.trim();

        if (q === '') {
            if (globalState.currentURL === '/') {
                history.push('/')
            } else {
                history.push(`/${globalState.currentURL}`);
            }
        } 
        else {
            //append search query to url
            history.push(`/search/?query=${q}`);
        }
    }

    return (
        <div className={className}>
            <SearchForm handleSubmit={updateAddressBar} />
        </div>
    );

}
export default HeaderSearch;