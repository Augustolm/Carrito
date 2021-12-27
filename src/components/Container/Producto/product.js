import React from 'react';
//import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import { data } from '../services/handMadePromis';




const Product = () => {



    const {postId} = useParams();
    console.log(postId)



    

    const p = data.find(o => o.id == postId)
    console.log(p)

    
//      const [products, setProducts] = useState()
   
//    console.log(products)
//     //console.log('Los producots en el hook', products)
//     useEffect(() => {
        
//         data.then(res => {
//             setProducts(res)
            
//         }).catch(err => alert('Algo no salio como se esperaba', err))
//     },[]);
//     const p = products.find(products => products.id == postId);

//     console.log(p)
    

    return(
        
        <div>
                
                <h1>Usted selecciono</h1>
                <img src={p.image} className="imagen" alt = 'imagen'></img>
                <span>{p.descripcion}</span> 
                <h4>Precio: {p.price}</h4>
                <h5>Cantidades diponibles: {p.stock}</h5> 
                 
            


        
        <h2>Producto</h2>
        <Link to="/">About</Link>
        </div>
    )

    
}

export default Product
