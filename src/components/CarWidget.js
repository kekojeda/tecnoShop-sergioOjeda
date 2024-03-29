import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CarWidget() {
  const { totalItem } = useContext(CartContext);

  return (
    <>
      <Link
        to="/tecnoShop-sergioOjeda/cart"
        className="mt-1 mx-2 btn btn-outline-light position-relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-bag"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        {totalItem > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {totalItem}
            <span className="visually-hidden">Productos en el carrito</span>
          </span>
        )}
      </Link>
    </>
  );
}

export { CarWidget };
