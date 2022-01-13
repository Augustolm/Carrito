import React from 'react';
//import ItemCount from './itemCount';
import { useState, useEffect } from 'react';
import getProducts from './services/handMadePromis';
import ItemList from './itemList';
import Typography from '@mui/material/Typography'



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
            <Typography variant="h2" color="initial" align='center'> { greeting }</Typography>
           
            
            <ItemList products={products} />
           
        </div>
    )
};


export default ItemListContainer
