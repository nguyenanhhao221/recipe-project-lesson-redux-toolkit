import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';

export function App(props) {
    const { dispatch } = props;
    //get the valid result after user key in the search term in the search box
    return (
        <main>
            {/* <section>
                <SearchTerm
                    dispatch={dispatch}
                />
            </section>
            <section>
                <h2>Favorite Recipes</h2>
                <FavoriteRecipes
                    dispatch={dispatch}
                />
            </section>
            <hr /> */}
            <section>
                <h2>All Recipes</h2>
                <AllRecipes
                    dispatch={dispatch}
                />
            </section>
        </main>
    )
}

/* Utility Helpers */
//return the recipes which includes the user input in the search box
function getFilteredRecipes(recipes, searchTerm) {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}