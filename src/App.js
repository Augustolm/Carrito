
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


const sendOrder = async () =>  {

  const neworder = {
      buyer: {name: 'Luciano', lastname: 'Mosettig', phone: '1515151515', email: 'test@test.com' },
      item: {
        image:"https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
        title:"Ryzen 5900x",
        descripcion: "Este es el primer producto",
        categoria:"Procesadores",
        price: "73000",
        stock: "0",
        initials: "0"
      },
      total: 7300
   };

  const {id} = await  addDoc(collection(db, 'NewOrder'), neworder);

 

  console.log('Usuario! esta es tu orderId nueva', id);
}


  return (
    

    <div className="App"  >

     
     
      <NavBar  cantidadCompra={carts} />
      {/* <button onClick={arrayUpload}>
        Subir
      </button> */}
      <button onClick={sendOrder}>
        Cargar Nuevaorder
      </button> 
      <ItemlistContainer  greeting = 'Bienvenidos a tu tienda Online' />
      <Link to = "/nosotros">Nosotros</Link>
      <Link to = "ListCarrito">Lista Producto</Link>
     
      

    </div>

    
 
  );
}

export default App;

//rafcp