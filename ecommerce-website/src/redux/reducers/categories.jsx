import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [
    {
      imgUrl: '/images/category/01.jpg',
      imgAlt: 'DSLR Camera category',
      iconName: 'icofont-brand-windows',
      title: 'DSLR Cameras',
    },
    {
      imgUrl: '/images/category/02.jpg',
      imgAlt: 'Shoes category',
      iconName: 'icofont-brand-windows',
      title: 'Stylish Shoes',
    },
    {
      imgUrl: '/images/category/03.jpg',
      imgAlt: 'Photography category',
      iconName: 'icofont-brand-windows',
      title: 'Photography Gear',
    },
    {
      imgUrl: '/images/category/04.jpg',
      imgAlt: 'Formal Dress category',
      iconName: 'icofont-brand-windows',
      title: 'Formal Dresses',
    },
    {
      imgUrl: '/images/category/05.jpg',
      imgAlt: 'Colorful Bags category',
      iconName: 'icofont-brand-windows',
      title: 'Colorful Bags',
    },
    {
      imgUrl: '/images/category/06.jpg',
      imgAlt: 'Home Decor category',
      iconName: 'icofont-brand-windows',
      title: 'Home Decor',
    },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Optionally add reducers for future state updates
  },
});

export default categoriesSlice.reducer;
