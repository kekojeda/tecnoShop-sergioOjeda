import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

import { ItemCount } from "./ItemCount";

function ItemDetail({ id, title, description, price, image }) {

  const [cart, setCart] = useState(true);
  
  const CartContextValue = useContext(CartContext);

  return (
    <>
      <div className="col">
        <div className="card">
          <h5 className="card-title mx-auto">{title}</h5>
          <img src={image} className="w-25 mx-auto" alt={title} />
          <div className="card-body mx-auto">
            <h4 className="card-text">Descripcion:</h4>
            <p className="card-text">{description}</p>
            <h4 className="card-text mx-auto">Precio:</h4>
            <p className="card-text mx-auto">${price}</p>
            {cart ? (
              <ItemCount
                stock={5}
                initial={1}
                onAdd={(n) => {
                  alert(`Se agregaron ${n} productos en el carrito`);
                  CartContextValue.addItem(id, title, price, n)

                  setCart(false);
                }}
              />
            ) : (
              <Link to="/cart" className="btn btn-outline-primary btn-sm">
                Ver el carrito
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { ItemDetail };
