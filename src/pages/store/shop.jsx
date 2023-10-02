import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import { getShopItems } from '../../services/api';
import { CartContext } from '../../context/context';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { setCartItemsCount } = useContext(CartContext); // Access the setCartItemsCount function from the CartContext

  useEffect(() => {
    fetchShopItems();
  }, []);

  const fetchShopItems = async () => {
    try {
      const items = await getShopItems();
      setShopItems(items);
    } catch (error) {
      console.error('Error fetching shop items:', error);
    }
  };

  const addToCart = (product, quantity) => {
    console.log('Adding to cart:', product, 'Quantity:', quantity);
    // Implement the logic to update the cart
    setCartItemsCount((prevCount) => prevCount + quantity); // Update the cartItemsCount using the setCartItemsCount function
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === 'all'
      ? shopItems
      : shopItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container-fluid">
      <h1>Shop</h1>
      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">
          Filter by Category:
        </label>
        <select
          id="categorySelect"
          className="form-select"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="all">All</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="col">
            <ProductCard product={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;