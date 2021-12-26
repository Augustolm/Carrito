import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Item from "../items";
import getProducts from '../services/handMadePromis';



const Product = (products) => {


    return(
        <>
         <NavBar />
         <Item />
        <h2>Producto</h2>
        <Link to="/">About</Link>
        </>
    )

    
}

export default Product
