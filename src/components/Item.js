import React from "react";
import { Link } from "react-router-dom";

function Item({ id, title, description, price, image }) {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <h5 className="card-title mx-auto">{title}</h5>
          <img src={image} className="w-50  mx-auto" alt={title} />
          <div className="card-body mx-auto">
            <p className="card-text">{description}</p>
            <p className="card-text mx-auto">${price}</p>
            <Link
              to={"/detalleProducto/" + id}
              className="btn btn-primary"
              aria-current="page"
            >
              Ver detalle del producto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export { Item };
