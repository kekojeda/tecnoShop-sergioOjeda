import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      {/*
        <ItemDetailContainer greeting={ "ItemDetailContainer "}/>
      <ItemListContainer greeting={ "ItemListContainer "}/>
  */}

      <Outlet />
    </>
  );
}

export default App;
