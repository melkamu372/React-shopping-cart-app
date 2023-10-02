import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CartContext } from '../context/context';
const Navbar = () => {
  const { cartItemsCount } = useContext(CartContext);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/" exact>
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
                {cartItemsCount > 0 && (
                  <span className="cart-count">{cartItemsCount}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <Outlet />
    </>
  );
};

export default Navbar;