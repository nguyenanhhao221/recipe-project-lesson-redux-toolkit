export const setSearchTerm = term => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}
export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}
const initialState = '';
export const searchTermReducer = (searchTerm = initialState, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return searchTerm;
    }
}