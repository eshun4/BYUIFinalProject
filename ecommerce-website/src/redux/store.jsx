import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import categoriesReducer from '../redux/reducers/categories';



const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});

export default store;
