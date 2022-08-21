import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ItemCount } from "./ItemCount";

function ItemDetail({ item }) {
  const [cart, setCart] = useState(true);

  const CartContextValue = useContext(CartContext);

  const customAlert = withReactContent(Swal);

  return (
    <>
      <div className="card  mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={item.image}
              className="m-5 w-50 img-fluid rounded-start"
              alt={item.title}
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                <small className="text-muted">{item.category}</small>
              </p>
              <p className="card-text">{item.description}</p>
              <p className="text-center fs-1 fw-semibold card-text mt-20">
                ${item.price}
              </p>
              {cart ? (
                <ItemCount
                  stock={5}
                  initial={1}
                  onAdd={(n) => {
                    customAlert.fire(
                      `Se agrego ${n} productos al carrito.`,
                      n,
                      "success"
                    );

                    CartContextValue.addItem(
                      item.id,
                      item.title,
                      item.price,
                      n,
                      item.image,
                      item.category
                    );
                    setCart(false);
                  }}
                />
              ) : (
                <div className="text-center">
                  <Link
                    to="/cart"
                    className="p-3 mt-2 btn btn-outline-dark btn-sm"
                    style={{ borderColor: "#c2000b", color: "#c2000b" }}
                  >
                    Ver el carrito
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ItemDetail };
