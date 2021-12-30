import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Container/Producto/product';
import Nosotros from './components/Container/Informacion/nosotros';



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>

      <Route path="/" element={ <App />} />
      <Route path="/producto/:postId" element={ <Product />} />
      <Route path="/nosotros" element={ <Nosotros />} />
       
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

