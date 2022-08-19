import React from "react";
import { Link } from "react-router-dom";

function Item({ id, title, description, price, image }) {
  return (
    <>
      <div className="col-3 mb-2">
        <div className="card h-100 p-2">
          <h5 className="card-title mx-auto text-nowrap">{title}</h5>
          <img src={image} className="w-50  mx-auto" alt={title} />
          <div className="card-body mx-auto">
            <p className="card-text">{description}</p>
            <p className="card-text mx-auto">${price}</p>

            <Link
              to={"/detalleProducto/" + id}
              className="m-3 position-absolute bottom-0 translate-middle-x btn btn-outline-dark text-nowrap"
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
