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
       
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

