
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlistContainer from './components/Container/ItemListContainer'
import { Link } from 'react-router-dom';



function App() {
  return (
    
     <div className="App"  >


      <NavBar />
      <ItemlistContainer  greeting = 'Bienvenidos a tu tienda Online' />
    
      <Link to = "/productos">Productos</Link> |{" "}
      
      <Link to = "/nosotros">Nosotros</Link> 
      

    </div>

    
 
  );
}

export default App;

//rafcp