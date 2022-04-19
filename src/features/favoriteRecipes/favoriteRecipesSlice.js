import { selectSearchTerm } from "../searchTerm/searchTermSlice";
//add recipe to favorite action creator
export const addRecipe = recipe => {
    return {
        type: 'favoriteRecipe/addRecipe',
        payload: recipe
    }
}

//remove from favorite action creator
export const removeRecipe = recipe => {
    return {
        type: 'favoriteRecipe/removeRecipe',
        payload: recipe
    }
}
const initialState = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialState, action) => {
    switch (action.type) {
        case 'favoriteRecipe/addRecipe':
            if (favoriteRecipes.includes(action.payload)) {
                return favoriteRecipes;
            }
            return [
                ...favoriteRecipes,
                action.payload
            ];
        //remove recipe
        //return the favoriteRecipe state(array) which not contain the recipe in the removeRecipe action
        case 'favoriteRecipe/removeRecipe':
            return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
        default: return favoriteRecipes;
    }
}

//selector
export const selectFavoriteRecipes = state => state.favoriteRecipes;
export const selectFavoriteFilteredRecipes = state => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
