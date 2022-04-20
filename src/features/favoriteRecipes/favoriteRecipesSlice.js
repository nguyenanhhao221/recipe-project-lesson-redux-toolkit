import { selectSearchTerm } from "../searchTerm/searchTermSlice";
//rewrite code using redux toolkit
import { createSlice } from "@reduxjs/toolkit";
//createSlice()
const options = {
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
        addRecipe: (state, action) => { state.push(action.payload) },
        removeRecipe: (favoriteRecipes, action) => favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
    }
};
export const favoriteRecipesSlice = createSlice(options);

//selectors
export const selectFavoriteRecipes = state => state.favoriteRecipes;
export const selectFilteredFavoriteRecipes = state => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

//export actions using named export
export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;
//export reducer using default export
export default favoriteRecipesSlice.reducer;


