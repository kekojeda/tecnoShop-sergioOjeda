import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import products from "../products.json";

function ItemDetailContainer({ greeting }) {
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productId = useParams();

  const product = products.filter((el) => el.id == productId.id);

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      resolve(product, setIsLoading(false));
    }, 2000);
  });

  useEffect(() => {
    getItem
      .then((product) => setDetail(product))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [productId.id]);

  console.log("product");
  console.log(product);
  console.log("detail");
  console.log(detail);

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
            <>
              {detail &&
                detail.map(
                  ({ id, title, price, description, category, image }) => (
                    <ItemDetail
                      id={id}
                      title={title}
                      price={price}
                      description={description}
                      category={category}
                      image={image}
                      key={id}
                    />
                  )
                )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export { ItemDetailContainer };
