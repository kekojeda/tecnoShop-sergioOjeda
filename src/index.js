import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { CategoriaContainer } from "./components/CategoriaContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="productos" element={<ItemListContainer greeting={ "ItemListContainer "} />} />
          <Route path="detalleProducto/:id" element={<ItemDetailContainer greeting={ "ItemDetailContainer "}/>} />
          <Route path="categoria/:id" element={<CategoriaContainer greeting={ "CategoriaContainer "}/>} />
          <Route path="*" element={<h3>Esta ruta no existe</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
