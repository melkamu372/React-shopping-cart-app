import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContext } from "../context/context";

const Navbar = () => {
  const { cartItemsCount } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search operation with searchQuery
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand">
            <NavLink className="nav-link" to="/" exact>
              Manuhie Shoping
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <form className="d-flex" onSubmit={handleSearch}>
                  <div className="input-group mb-3">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control"
                      placeholder="Search items"
                      aria-label=""
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-success"
                      type="submit"
                      id="button-addon2"
                    >
                      search
                    </button>
                  </div>
                </form>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  <span> Store </span>
                </NavLink>
              </li>
              <li className="nav-item ml-2">
                <NavLink className="nav-link" to="/shop">
                  <span class="badge text-bg-info rounded-circle">
                    {cartItemsCount > 0 && (
                      <span className="cart-count">{cartItemsCount}</span>
                    )}
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
