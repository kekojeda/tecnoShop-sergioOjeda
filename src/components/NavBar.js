import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CarWidget } from "./CarWidget";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" aria-current="page">
            TecnoShop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/category/mens-clothing"
                  className="nav-link"
                  aria-current="page"
                >
                  Men's Clothing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/jewelery"
                  className="nav-link"
                  aria-current="page"
                >
                  Jewelery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/electronics"
                  className="nav-link"
                  aria-current="page"
                >
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/womens-clothing"
                  className="nav-link"
                  aria-current="page"
                >
                  Women's Clothing
                </NavLink>
              </li>
            </ul>
          </div>
          <CarWidget />
          <button type="button" className="btn btn-outline-dark">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
