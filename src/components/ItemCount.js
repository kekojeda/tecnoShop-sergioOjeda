import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function incrementar() {
    setCount(count + 1);
  }

  function decrementar() {
    setCount((valAnt) => (valAnt > 1 ? count - 1 : count));
  }

  return (
    <div className="position-absolute bottom-0 start-50 translate-middle-x">
      {/* El Boton no deja seguir decrementando si es menor a 0 */}
      <button className="btn btn-outline-primary btn-sm" onClick={decrementar}>
        -
      </button>

      <span className="alert alert-ligth" role="alert">
        {count}
      </span>

      {/* El Boton no deja seguir incrementando si no hay stock disponible */}
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={count < stock && incrementar}
      >
        +
      </button>

      <div>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => {
            onAdd(count);
            //count <= stock ? onAdd(count) : alert(`No hay suficiente Stock, solo puedes agregar ${stock} productos`)
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export { ItemCount };
