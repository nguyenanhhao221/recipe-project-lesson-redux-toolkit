import React from "react";
import { setSearchTerm, clearSearchTerm } from "./searchTermSlice";
const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';


export function SearchTerm({ searchTerm, dispatch }) {
    //onChange event listener will fire this when user type in the search box
    //take the user input and dispatch the setSearchTerm action to the store
    const onSearchTermChangeHandler = e => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput))
    }
    // when user clicked on the "X" icon
    //dispatch the clearSearchTerm to the store to update the state
    const onClearSearchTermHandler = e => {
        dispatch(clearSearchTerm());
    }


    return (
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search recipes"
            />
            {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                    <img src={clearIconUrl} alt="" />
                </button>
            )}
        </div>
    );
}