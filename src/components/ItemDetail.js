import React from "react";

import { ItemCount } from "./ItemCount";

function ItemDetail({ id, title, description, price, image }) {
  return (
    <>
      <div className="col">
        <div className="card">
          <h5 className="card-title mx-auto">{ title}</h5>
          <img src={ image} className="w-50  mx-auto" alt={ title} />
          <div className="card-body mx-auto">
            <h4 className="card-text">Descripcion:</h4>
            <p className="card-text">{ description}</p>
            <h4 className="card-text mx-auto">Precio:</h4>
            <p className="card-text mx-auto">${ price}</p>
            <ItemCount
              stock={5}
              initial={1}
              onAdd={(n) => alert(`Se agregaron ${n} productos en el carrito`)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { ItemDetail };
