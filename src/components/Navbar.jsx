import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({cartItemsCount }) => {
  const baseUrl = '/React-shopping-cart-app/'
  return (
    <nav>
      <ul>
        <li>
          <Link to={baseUrl + 'home'}>Home</Link>
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