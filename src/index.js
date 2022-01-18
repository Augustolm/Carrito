import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Container/Producto/product';
import Nosotros from './components/Container/Informacion/nosotros';
import CategoriMicro from './components/Container/Categorias/categoriMicro';
import CategoriPv from './components/Container/Categorias/categoriPv';
import CategoriPeriferi from './components/Container/Categorias/categoriPeriferi';
import { Carrito } from './components/Container/Carrito/carrito';





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ListProduct } from './components/Container/services/listProduct';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv7EnuV26ZyhTqjS_KzEtnnkjGH_VnAwA",
  authDomain: "carrito-miproyecto.firebaseapp.com",
  projectId: "carrito-miproyecto",
  storageBucket: "carrito-miproyecto.appspot.com",
  messagingSenderId: "437420411590",
  appId: "1:437420411590:web:ac4cc4cb506f4c15dae5c7",
  measurementId: "G-HTEZ1S8H68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);




ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>

      <Route path="/" element={ <App />} />
      <Route path="/producto/:postId" element={ <Product />} />
      <Route path="/nosotros" element={ <Nosotros />} />
      <Route path="categoriMicro" element={ <CategoriMicro />} />
      <Route path="CategoriPv" element={ <CategoriPv />} />
      <Route path="CategoriPeriferi" element={ <CategoriPeriferi />} />
      <Route path='Carrito' element= {<Carrito />} />
      <Route path='ListCarrito' element= {<ListProduct />} />
      
   
      
       
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

