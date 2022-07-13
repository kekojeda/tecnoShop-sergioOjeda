import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
     <ItemDetailContainer greeting={ "ItemDetailContainer "}/>
     <ItemListContainer greeting={ "ItemListContainer "}/>
     
    </>
   
  );
}

export default App;
