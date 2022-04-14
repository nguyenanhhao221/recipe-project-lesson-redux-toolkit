import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';

export function App() {
    //get the valid result after user key in the search term in the search box
    return (
        <main>
            <section>
                <SearchTerm />
            </section>
            <section>
                <h2>Favorite Recipes</h2>
                <FavoriteRecipes />
            </section>
            <hr />
            <section>
                <h2>All Recipes</h2>
                <AllRecipes />
            </section>
        </main>
    )
};