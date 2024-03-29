import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CarWidget } from "./CarWidget";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#c2000b" }}
      >
        <div className="container-fluid">
          <Link to="/tecnoShop-sergioOjeda" className="navbar-brand" aria-current="page">
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
                <NavLink to="/tecnoShop-sergioOjeda" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/tecnoShop-sergioOjeda/category/mens-clothing"
                  className="nav-link"
                  aria-current="page"
                >
                  Men's Clothing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tecnoShop-sergioOjeda/category/jewelery"
                  className="nav-link"
                  aria-current="page"
                >
                  Jewelery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tecnoShop-sergioOjeda/category/electronics"
                  className="nav-link"
                  aria-current="page"
                >
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tecnoShop-sergioOjeda/category/womens-clothing"
                  className="nav-link"
                  aria-current="page"
                >
                  Women's Clothing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tecnoShop-sergioOjeda/track" className="nav-link" aria-current="page">
                  Segui tu orden
                </NavLink>
              </li>
            </ul>
          </div>
          <CarWidget />
        </div>
      </nav>
    </>
  );
}

export { NavBar };
