import allRecipesData from "../../data";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { createSlice } from "@reduxjs/toolkit";

//option for createSlice
const options = {
    name: 'allRecipes',
    initialState: [],
    reducers: {
        loadData: () => allRecipesData,
    },
    //if we want to utilize action from another slice, we use extraReducers
    extraReducers: {
        'favoriteRecipes/addRecipe': (state, action) => state.filter(recipe => recipe.id !== action.payload.id),
        'favoriteRecipes/removeRecipe' : (state, action) => {state.push(action.payload)}
    }
}
const allRecipesSlice = createSlice(options);

//implement selector
const selectAllRecipes = state => state.allRecipes;
export const selectFilteredAllRecipes = state => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

//Export default the reducer to be used in store
export default allRecipesSlice.reducer;

//export action
export const { loadData, addRecipe } = allRecipesSlice.actions;