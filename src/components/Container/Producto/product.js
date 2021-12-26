import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import ItemList from '../itemList';
import Item from "../items";
import getProducts from '../services/handMadePromis';




const Product = () => {

    
 

    const {id} = useParams()
    console.log(id)


    const [products, setProducts] = useState()
   
   console.log(products)
    //console.log('Los producots en el hook', products)
    useEffect(() => {
        
        getProducts.then(res => {
            setProducts(res)
            
        }).catch(err => alert('Algo no salio como se esperaba', err))
    },[id]);


      



    return(
        <>
        <h1></h1>
        
        <h2>Producto</h2>
        <Link to="/">About</Link>
        </>
    )

    
}

export default Product
