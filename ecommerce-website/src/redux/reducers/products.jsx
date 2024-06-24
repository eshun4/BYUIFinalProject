import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setSearchInput, setFilteredProducts } = productsSlice.actions;

export default productsSlice.reducer;
