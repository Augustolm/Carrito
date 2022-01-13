
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlistContainer from './components/Container/ItemListContainer'
import { Link } from 'react-router-dom';
import CartsContext, {carts, compra,  setCompra } from './components/Container/Provider/Cantidadcart';






function App() {
 
  //const {carts} = CustomHook()

  return (
    

    <div className="App"  >


      <CartsContext.Provider value={carts, compra,  setCompra} >

      <NavBar  cantidadCompra={carts} />

     
      <ItemlistContainer  greeting = 'Bienvenidos a tu tienda Online' />
      
      
      
      <Link to = "/nosotros">Nosotros</Link>
      
 
      </CartsContext.Provider>
      

    </div>

    
 
  );
}

export default App;

//rafcp