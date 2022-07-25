import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);

  const addQuantity = (id, cantidad) => {
    const found = item.find((element) => element.id === id);
    found.cantidad = found.cantidad + cantidad;
  };

  const isInCart = (id) => {
    return item.filter((el) => el.id === id).length;
  };

  const addItem = (id, product, price, quantity) => {
    const _item = {
      id: id,
      producto: product,
      precio: price,
      cantidad: quantity,
    };

    isInCart(id) ? addQuantity(id, quantity) : setItem([...item, _item]);
  };

  const removeItem = (id) => {
    const _items = item.filter((el) => el.id !== id);
    setItem(_items);
  };

  const clear = () => {
    setItem([]);
  };

  return (
    <CartContext.Provider
      value={{
        item,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
