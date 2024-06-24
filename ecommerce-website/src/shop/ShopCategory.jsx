import React from 'react';
import PropTypes from 'prop-types';
import Data from "../products.json";

const title = "All Categories";

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">{title}</h5>
      </div>
      <div className="">
        <button className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`} onClick={() => setProducts(Data)}>
          All
        </button>

        {menuItems && menuItems.map((Val, id) => {
          return (
            <button className={`m-2 ${selectedCategory === Val ? 'bg-warning' : ''}`} onClick={() => filterItem(Val)} key={id}>
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

ShopCategory.propTypes = {
  filterItem: PropTypes.func.isRequired,
  setItem: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default ShopCategory;
