import React, { useContext } from 'react';
import { CartContext } from '../context/context';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, cartItemsCount } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const isItemInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="card text-center product-container">
      <img src={product.images[1]} alt={product.title} className="product-img" />
      <div className="card-body ">
        <p className="card-title">{product.title}</p>
        <p className='fw-bold'> {product.price*50} Birr </p>
        {isItemInCart ? (
          <div>
            <button className="btn btn-danger" onClick={handleRemoveFromCart}>
              Remove From Cart
            </button>
          </div>
        ) : (
          <button className="btn btn-success" onClick={handleAddToCart}>
            <span className="bi bi-bag-fill"> </span> Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;