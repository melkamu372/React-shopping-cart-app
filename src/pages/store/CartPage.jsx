import { useState,useContext } from "react";
import { CartContext } from '../../context/context';
const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [itemQuantities, setItemQuantities] = useState({});

  const calculateItemPrice = (item) => {
    const quantity = itemQuantities[item.id] || 1;
    return (item.price * quantity).toFixed(2);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const quantity = itemQuantities[item.id] || 1;
      totalPrice += item.price * quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleIncreaseQuantity = (itemId) => {
    const quantity = itemQuantities[itemId] || 1;
    const updatedQuantities = { ...itemQuantities, [itemId]: quantity + 1 };
    setItemQuantities(updatedQuantities);
  };

  const handleDecreaseQuantity = (itemId) => {
    const quantity = itemQuantities[itemId] || 1;
    if (quantity > 1) {
      const updatedQuantities = { ...itemQuantities, [itemId]: quantity - 1 };
      setItemQuantities(updatedQuantities);
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedQuantities = { ...itemQuantities };
    delete updatedQuantities[itemId];
    setItemQuantities(updatedQuantities);
    removeFromCart(itemId);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} (Quantity: {itemQuantities[item.id] || 1})
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                <p>Item Price: ${calculateItemPrice(item)}</p>
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;