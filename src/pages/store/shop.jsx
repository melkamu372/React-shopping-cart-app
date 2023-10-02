import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import { getShopItems } from '../../services/api';
import { CartContext } from '../../context/context'; 
const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
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

  return (
    <div>
      <h1>Shop</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {shopItems.map((item) => (
          <div key={item.id} className="col">
            <ProductCard product={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;