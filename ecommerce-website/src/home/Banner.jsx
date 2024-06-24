import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput, setFilteredProducts } from '../redux/reducers/products';
import productData from '../products.json';
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = (
  <h2>Explore a World of Possibilities<span> with Countless</span> Products.</h2>
);

  
  const desc = "Explore our unparalleled collection of products and find exactly what you need.";
  

const Banner = () => {
  const searchInput = useSelector(state => state.products.searchInput);
  const filteredProducts = useSelector(state => state.products.filteredProducts);
  const dispatch = useDispatch();

  const handleSearch = e => {
    const searchTerm = e.target.value;
    dispatch(setSearchInput(searchTerm));

    // Filtering products based on search
    const filtered = productData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setFilteredProducts(filtered));
  };

  return (
    <div className="banner-section style-4">
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form>
            <SelectedCategory/>
            <input type='text' name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch}/>
            <button type='submit'>
              <i className='icofont-search'></i>
            </button>
          </form>
          <p> {desc}</p>
          <ul className='lab-ul'>
            {searchInput && filteredProducts.map((product, i) => (
              <li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
