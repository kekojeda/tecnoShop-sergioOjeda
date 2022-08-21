import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

function Item({ id, title, description, price, image }) {
  const TextTruncate = require("react-text-truncate");
  return (
    <>
      <div className="col-3 my-2">
        <div className="card h-100 p-2">
          <h5
            style={{
              whiteSpace: "nowrap",
              width: 100 + "%",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            className="card-title mx-auto"
          >
            {title}
          </h5>
          <div
            className="my-3"
            style={{
              width: 100 + "%",
              height: 150 + "px",
              minHeight: 150 + "px",
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="card-body mx-auto fs-7">
            <TextTruncate
              className="text-lowercase"
              line={3}
              element="p"
              truncateText="…"
              text={description}
            />

            <p className="card-text text-center fs-4">${price}</p>

            <Link
              to={"/detalleProducto/" + id}
              className="m-3 btn btn-outline-dark text-nowrap"
              aria-current="page"
              style={{ borderColor: "#c2000b", color: "#c2000b" }}
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
