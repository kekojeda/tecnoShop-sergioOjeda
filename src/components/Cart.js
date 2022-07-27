import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { item, totalItem, totalPrecio, removeItem, clear } =
    useContext(CartContext);

  return (
    <>
      {item.length <= 0 ? (
        <div className="alert alert-danger" role="alert">
        Todavia no hay elementos en el carrito, por favor, primero agregue un producto
        <Link to="/" className="btn btn-outline-primary btn-sm m-2">
                Ver Listado de productos
              </Link>
      </div>
      ) : (
        <>
          <div className="container">
            <div className="alert alert-primary" role="alert">
              Total ${totalPrecio}
              <button
                onClick={clear}
                type="button"
                className="btn btn-danger btn-sm m-2"
              >
                Vaciar Carrito
              </button>
            </div>
            <div className="alert alert-primary" role="alert">
              La cantidad de items total en el carito es {totalItem}
            </div>
          </div>
          <div className="container">
            <ul className="list-group">
              {item.map((el) => (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  cantidad: {el.cantidad} | {el.producto}
                  <span className="badge-primary badge-pill"></span>
                  <button
                    onClick={() => removeItem(el.id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export { Cart };
