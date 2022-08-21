import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../services/firebase";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [list, setList] = useState([]);

  const { categoryId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts(categoryId)
      .then((snapshot) => {
        setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <div className="d-flex align-items-center">
              <h2>
                <strong>
                  No entres en pánico, estamos cargando los productos ....
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
              <ItemList items={list} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export { ItemListContainer };
