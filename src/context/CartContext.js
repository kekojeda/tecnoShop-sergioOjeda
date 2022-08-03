import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [order, setOrder] = useState({});

  const totalItem = item
    .map((el) => el.cantidad)
    .reduce((valAnterior, valActual) => valAnterior + valActual, 0);

  const totalPrecio = item
    .map((el) => el.cantidad * el.precio)
    .reduce((valAnterior, valActual) => valAnterior + valActual, 0);

  const addQuantity = (id, cantidad) => {
    const found = item.find((element) => element.id === id);
    found.cantidad = found.cantidad + cantidad;
  };

  const isInCart = (id) => {
    return item.filter((el) => el.id === id).length;
  };

  const addItem = (id, product, price, quantity, key) => {
    console.log(id);
    const _item = {
      id: id,
      producto: product,
      precio: price,
      cantidad: quantity,
      key: id,
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

  const sendOrder = () => {
    const _order = {
      buyer: {
        name: "Sergio",
        phone: "123445",
        email: "mailCompras@gmail.com",
      },
      items: item,
      total: totalPrecio,
    };
    setOrder([_order]);

    console.log(order);
  };

  const data = {
    item,
    totalItem,
    totalPrecio,
    addItem,
    removeItem,
    clear,
    sendOrder,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
