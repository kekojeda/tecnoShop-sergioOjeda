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
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName={"active"}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/productos"
                  className="nav-link"
                  activeClassName={"active"}
                  aria-current="page"
                >
                  Todos los Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categoria/1"
                  className="nav-link"
                  activeClassName={"active"}
                  aria-current="page"
                >
                  Men's Clothing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categoria/2"
                  className="nav-link"
                  activeClassName={"active"}
                  aria-current="page"
                >
                  Jewelery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categoria/3"
                  className="nav-link"
                  activeClassName={"active"}
                  aria-current="page"
                >
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categoria/4"
                  className="nav-link"
                  activeClassName={"active"}
                  aria-current="page"
                >
                  Women's Clothing
                </NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
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
