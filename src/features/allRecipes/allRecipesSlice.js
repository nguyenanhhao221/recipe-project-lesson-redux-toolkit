import allRecipesData from "../../data";


//load data of recipes
export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }

}

const initialState = [];
export const allRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload
        default:
            return state
    }
}