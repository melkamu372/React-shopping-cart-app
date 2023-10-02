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
    <div className="card d-flex justify-content-center">
      <div className="card-body product-container" >
        <img src={product.image} alt={product.title} className="product-img" />
        <h5 className="card-title">{product.title}</h5>
        <div className="card-rating mb-2">
          Rating: 15 / 5
        </div>
        <div className="quantity-container d-flex align-items-center mb-2">
          <button className="btn btn-sm btn-secondary" onClick={handleDecrement}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            className="form-control"
            readOnly
          />
          <button className="btn btn-sm btn-secondary" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;