import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const Navbar = ({cartItemsCount }) => {
  const baseUrl = '/React-shopping-cart-app/'
=======
const Navbar = ({ cartItemsCount }) => {
>>>>>>> main
  return (
    <nav>
      <ul>
        <li>
<<<<<<< HEAD
          <Link to={baseUrl + 'home'}>Home</Link>
=======
          <Link to="/">Home</Link>
>>>>>>> main
        </li>
        <li>
          <Link to="/shop">Shop</Link>
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;