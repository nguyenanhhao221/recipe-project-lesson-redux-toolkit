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
            return allRecipes.filter(recipe => recipe !== action.payload);
        //similar to the addRecipe case, we utilize the favoriteRecipe/removeRecipe action to give back that recipe into allRecipes state
        case 'favoriteRecipe/removeRecipe':
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
export const selectSearchTerm = state => state.searchTerm;
export const selectFilteredAllRecipes = state => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// This code is for testing the selectors only.
const testState = {
    allRecipes: allRecipesData,
    searchTerm: 'ch'
}

const testSelectAllRecipes = () => {
    console.log('All Recipes')
    console.log(selectAllRecipes(testState));
}

const testSelectFilteredAllRecipes = () => {
    console.log('\nRecipes filtered by searchTerm')
    console.log(selectFilteredAllRecipes(testState));
}

// Uncomment these to test each selector.
testSelectAllRecipes();
testSelectFilteredAllRecipes();