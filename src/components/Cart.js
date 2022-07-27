import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { item, totalItem, totalPrecio, addItem, removeItem, clear } =
    useContext(CartContext);

    

  return (
    <>
      <div className="container">
        <ul className="list-group">
          {item.map((el) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              cantidad: {el.cantidad} | {el.producto}
              <span className="badge-primary badge-pill"></span>
              <button
                type="button"
                className="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <div class="alert alert-primary" role="alert">
          Total ${totalPrecio}
        </div>
        <div class="alert alert-primary" role="alert">
          La cantidad de items total en el carito es {totalItem}
        </div>
      </div>
    </>
  );
}

export { Cart };
