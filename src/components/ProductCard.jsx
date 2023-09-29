import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(0);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="quantity-container">
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;