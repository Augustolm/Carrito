
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer'


function App() {
  return (

    <div className="App">
      <NavBar />
      <ItemListContainer greeting = 'Bienvenidos a tu tienda Online'/>
    </div>

  );
}

export default App;

//rafcp