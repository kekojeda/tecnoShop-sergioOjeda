import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
//import products from "../products.json";
import { getProductsById } from "../services/firebase";

function ItemDetailContainer({ greeting }) {
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const productId = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProductsById(productId.id)
      .then((producto) => setDetail(producto))
      .finally(() => setIsLoading(false));
  }, [productId.id]);

  return (
    <>
      <div className="container">
        <h5 className="card-title">{greeting}</h5>
        <div className="row">
          {isLoading ? (
            <div className="d-flex align-items-center">
              <h2>
                <strong>
                  No entres en pánico, estamos cargando el Detalle del producto
                  ....
                </strong>
              </h2>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : (
            <>{detail && <ItemDetail item={detail} />}</>
          )}
        </div>
      </div>
    </>
  );
}

export { ItemDetailContainer };
