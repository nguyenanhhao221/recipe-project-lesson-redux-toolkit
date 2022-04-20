import { createSlice } from "@reduxjs/toolkit";
const options = {
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (searchTermState, action) => action.payload,
        clearSearchTerm: () => ''
    }
};

const searchTermSlice = createSlice(options);
export const selectSearchTerm = state => state.searchTerm;
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;

