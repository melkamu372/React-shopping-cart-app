import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { getShopItems } from '../../services/api';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);

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
  };

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-list">
        {shopItems.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
export default Shop;