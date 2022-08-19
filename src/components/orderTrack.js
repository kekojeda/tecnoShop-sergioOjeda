import React, { useState, useEffect } from "react";
import { getOrderById } from "../services/firebase";

function OrderTrack() {
  const [orderTrack, setOrderTrack] = useState([]);
  const [orderId, setOrderId] = useState([]);

  const getOrder = () => {
    getOrderById(orderId).then((order) => setOrderTrack([order]));

    console.log(orderTrack);
    console.log(orderTrack[0].buyer.email);
  };

  const preventSubmit = (e) => {
    e.preventDefault();
    console.log("Se evito el submit");
  };

  return (
    <>
      <form className="mt-4" onSubmit={preventSubmit}>
        <div className="form-outline form-white mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Número de orden"
            value={orderId}
            onChange={(ev) => {
              setOrderId(ev.target.value);
            }}
          />
        </div>

        <div class="m-3 d-grid gap-2">
          <button
            class="btn btn-outline-success"
            type="button"
            onClick={() => {
              getOrder();
            }}
          >
            BUSCAR
          </button>
        </div>
      </form>

      {orderTrack.length ? (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">
            Detalle de la orden Número: {orderId}
          </h4>
          <p>Nombre: {orderTrack[0].buyer.name}</p>
          <p>Telefono: {orderTrack[0].buyer.phone}</p>
          <p>Email: {orderTrack[0].buyer.email}</p>
          <p>Total de items en la orden: {orderTrack[0].items.length}</p>
          <p>Precio total de la orden: ${orderTrack[0].total}</p>

          <hr />
          <h4 className="alert-heading">Estado de la Orden: EN PROGRESO</h4>
          <p className="mb-0">
            Si Necesita ayuda adicional, pongase en contacto con administracion.
          </p>
        </div>
      ) : (
        <div class="alert alert-info" role="alert">
          La orden ingresada no es valida o todavia no se ingreso.
        </div>
      )}
    </>
  );
}

export { OrderTrack };
