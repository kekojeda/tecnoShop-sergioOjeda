import React from 'react';
import { CarWidget } from './CarWidget';


function NavBar(){

   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      TecnoShop
</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ofertas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Devoluciones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          
          
        </ul>
        
      </div>
      <CarWidget />
      <button type="button" className="btn btn-outline-dark">Login</button>

    </div>
  </nav>
    )
}

export { NavBar };