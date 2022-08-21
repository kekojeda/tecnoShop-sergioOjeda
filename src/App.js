import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { CartContextProvider } from "./context/CartContext";
import { OrderTrack } from "./components/OrderTrack";


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/tecnoShop-sergioOjeda" element={<ItemListContainer />} />
            <Route
              path="tecnoShop-sergioOjeda/detalleProducto/:id"
              element={
                <ItemDetailContainer greeting={"ItemDetailContainer "} />
              }
            />
            <Route
              path="tecnoShop-sergioOjeda/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="tecnoShop-sergioOjeda/cart" element={<Cart />} />
            <Route path="tecnoShop-sergioOjeda/track" element={<OrderTrack />} />
            <Route path="*" element={<h3>Esta ruta no existe</h3>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export { App };
