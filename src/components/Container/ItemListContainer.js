import React from 'react';
//import ItemCount from './itemCount';
import { useState, useEffect } from 'react';
import getProducts from './services/handMadePromis';
import ItemList from './itemList';


const ItemListContainer = ( {greeting} ) => {

 

    const [products, setProducts] = useState([])
    //console.log('Los producots en el hook', products)

    useEffect(() => {
        getProducts.then(res => {
            setProducts(res)
        }).catch(err => alert('Algo no salio como se esperaba', err))
    },[]);

    return (
        <div id='Principal' >
            <h1> { greeting } </h1>
            
            <ItemList products={products} />
        </div>
    )
};


export default ItemListContainer
