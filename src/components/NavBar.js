import React from "react";
import { NavLink } from "react-router-dom";
import { CarWidget } from "./CarWidget";



function NavBar() {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TecnoShop
          </a>
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
                <NavLink to="/" className="nav-link" activeClassName={"active"} aria-current="page" >
                  Home
                </NavLink>
               
              </li>
              <li className="nav-item">
              <NavLink to="/productos" className="nav-link" activeClassName={"active"} aria-current="page" >
                  Productos
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/detalleProductos" className="nav-link" activeClassName={"active"} aria-current="page" >
                  Detalle Producto
              </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categorias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Devoluciones
                </a>
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
