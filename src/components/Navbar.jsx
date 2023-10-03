import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../context/context";

const Navbar = () => {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand">
            <NavLink className="nav-link" to="/" exact>
              Manuhie Shopping Center
            </NavLink>
          </div>
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
                <NavLink className="nav-link fs-4" to="/shop">
                  <span> Store </span>
                </NavLink>
              </li>
              <li className="nav-item ml-2">
                <NavLink className="nav-link position-relative fs-4" to="/bag">
                <span className="position-absolute start-100 translate-middle badge rounded-pill text-warning">
                    {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
                  </span>
                  <i className="bi bi-bag-fill"></i>
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