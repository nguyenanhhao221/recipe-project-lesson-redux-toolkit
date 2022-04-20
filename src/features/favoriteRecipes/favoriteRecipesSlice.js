import { selectSearchTerm } from "../searchTerm/searchTermSlice";
//rewrite code using redux toolkit
import { createSlice } from "@reduxjs/toolkit";
//createSlice()
const options = {
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
        addRecipe: (state, action) => { state.push(action.payload) },
        //we wrap this in a curly braces because it will become a function body. And because a function that returns nothing also means that it will return "undefined". 
        //With Immer when it see that we return `undefined Immer thinks that we just tried to mutate the state and not return any new value.
        //Immer return rules it that you either mutate the state or return a totally new value. BUT YOU CANNOT DO BOTH
        //if we doesn't use {} it because implicit return which also mean that we mutate the state and return a new value. THIS WILL NOT WORK
        //this go against Immer rule and will cause error
        removeRecipe: (favoriteRecipes, action) => favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
        // in this case we no need anything special because filter doesn't mutate the favoriteRecipes so the any value return even if it's a new value is ok and not violate Immer rule
    }
};
export const favoriteRecipesSlice = createSlice(options);

//selectors1
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


