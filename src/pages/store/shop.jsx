import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import { getShopItems } from '../../services/api';
import { CartContext } from '../../context/context';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSortOption, setSelectedSortOption] = useState('none');
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

  const handleSortOptionChange = (sortOption) => {
    setSelectedSortOption(sortOption);
  };

  const applySort = (items) => {
    switch (selectedSortOption) {
      case 'priceLowToHigh':
        return items.sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return items.sort((a, b) => b.price - a.price);
      case 'nameAscending':
        return items.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDescending':
        return items.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return items;
    }
  };

  const filteredItems =
    selectedCategory === 'all'
      ? shopItems
      : shopItems.filter((item) => item.category === selectedCategory);

  const sortedItems = applySort(filteredItems);

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
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="sortOptionSelect" className="form-label">
          Sort by:
        </label>
        <select
          id="sortOptionSelect"
          className="form-select"
          value={selectedSortOption}
          onChange={(e) => handleSortOptionChange(e.target.value)}
        >
          <option value="none">None</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="nameAscending">Name: A to Z</option>
          <option value="nameDescending">Name: Z to A</option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {sortedItems.map((item) => (
          <div key={item.id} className="col">
            <ProductCard product={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;