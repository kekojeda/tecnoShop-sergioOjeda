import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { CategoriaContainer } from "./components/CategoriaContainer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { CartContextProvider } from "./components/CartContext"

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="productos"
              element={<ItemListContainer greeting={"ItemListContainer "} />}
            />
            <Route
              path="detalleProducto/:id"
              element={
                <ItemDetailContainer greeting={"ItemDetailContainer "} />
              }
            />
            <Route
              path="productos/:id"
              element={<CategoriaContainer greeting={"CategoriaContainer "} />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<h3>Esta ruta no existe</h3>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export { App };
