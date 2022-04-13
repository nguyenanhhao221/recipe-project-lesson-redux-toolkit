import allRecipesData from "../../data";


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
        case 'favoriteRecipe/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        //similar to the addRecipe case, we utilize the favoriteRecipe/removeRecipe action to give back that recipe into allRecipes state
        case 'favoriteRecipe/removeRecipe':
            return [
                ...allRecipes,
                action.payload
            ]
        default:
            return allRecipes;
    }
}