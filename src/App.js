import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      

 

      

      

      <Outlet />
    </>
  );
}

export default App;
