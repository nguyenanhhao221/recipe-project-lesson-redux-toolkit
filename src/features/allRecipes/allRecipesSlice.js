import allRecipesData from "../../data";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

//load data of recipes
export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }

}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        //can even use action from favoriteRecipe slice
        //we utilize this to remove the recipe from allRecipe when clicked on favorite button
        case 'favoriteRecipes/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        //similar to the addRecipe case, we utilize the favoriteRecipe/removeRecipe action to give back that recipe into allRecipes state
        case 'favoriteRecipes/removeRecipe':
            return [
                ...allRecipes,
                action.payload
            ]
        default:
            return allRecipes;
    }
};

//implement selector
export const selectAllRecipes = state => state.allRecipes;
export const selectFilteredAllRecipes = state => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}