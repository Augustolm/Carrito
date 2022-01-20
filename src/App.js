
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlistContainer from './components/Container/ItemListContainer'
import { Link } from 'react-router-dom';
import CartsContext, {carts, compra,  setCompra } from './components/Container/Provider/Cantidadcart';
import {collection, addDoc} from "firebase/firestore"
import db from './components/Container/services/firebase';
import { data } from './components/Container/services/handMadePromis';
import Button from '@mui/material/Button'



function App() {
 
//   console.log(process.env);
// //para update
//   const arrayUpload = () => {

//     data.forEach((element) => {

//       addDoc(collection(db, 'product'), {...element})

//     })

//   }


  return (
    

    <div className="App"  >

     
     
      <NavBar  cantidadCompra={carts} />
      {/* <button onClick={arrayUpload}>
        Subir
      </button> */}
      <ItemlistContainer  greeting = 'Bienvenidos a tu tienda Online' />
      <Link to = "/nosotros">Nosotros</Link>
      <Link to = "ListCarrito">Lista Producto</Link>
     
      

    </div>

    
 
  );
}

export default App;

//rafcp