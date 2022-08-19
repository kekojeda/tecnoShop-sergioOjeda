import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [orderId, setOrderId] = useState("");

  const customAlert = withReactContent(Swal);

  const totalItem = item
    .map((el) => el.cantidad)
    .reduce((valAnterior, valActual) => valAnterior + valActual, 0);

  const totalPrecio = item
    .map((el) => el.cantidad * el.precio)
    .reduce((valAnterior, valActual) => valAnterior + valActual, 0);

  const addQuantity = (id, cantidad) => {
    const foundItem = item.find((element) => element.id === id);
    foundItem.cantidad = foundItem.cantidad + cantidad;

    const remove = item.filter((el) => el.id !== foundItem.id);
    setItem([...remove, foundItem]);
  };

  const isInCart = (id) => {
    return item.filter((el) => el.id === id).length;
  };

  const addItem = (id, product, price, quantity, image, category, key) => {
    const _item = {
      id: id,
      producto: product,
      precio: price,
      cantidad: quantity,

      key: id,
      imagen: image,
      categoria: category,
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

  const sendOrder = (buyerName, buyerPhone, buyerEmail) => {
    const _order = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail,
      },
      items: item,
      date: Timestamp.fromDate(new Date()),
      total: totalPrecio,
    };

    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, _order).then(({ id }) => setOrderId(id));
    customAlert.fire(
      "Su Orden fue cargada con exito, este es su numero de orden:",
      orderId,
      "success"
    );

    clear();
  };

  const data = {
    item,
    totalItem,
    totalPrecio,
    addItem,
    removeItem,
    clear,
    sendOrder,
    orderId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
