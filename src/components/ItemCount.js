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
    <div className="container text-center">
      {/* El Boton no deja seguir decrementando si es menor a 0 */}
      <button
        className="p-2 btn btn-primary btn-sm"
        onClick={decrementar}
        style={{
          backgroundColor: "#c2000b",
          borderColor: "#c2000b",
          color: "white",
        }}
      >
         - 
      </button>

      <span className="fs-5 alert alert-ligth" role="alert">
        {count}
      </span>

      {/* El Boton no deja seguir incrementando si no hay stock disponible */}
      <button
        className="p-2 btn btn-primary btn-sm"
        onClick={count < stock && incrementar}
        style={{
          backgroundColor: "#c2000b",
          borderColor: "#c2000b",
          color: "white",
        }}
      >
         + 
      </button>

      <div>
        <button
          className="p-3 mt-2 btn btn-outline-dark btn-sm"
          style={{ borderColor: "#c2000b", color: "#c2000b" }}
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export { ItemCount };
