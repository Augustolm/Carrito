import React from 'react';
//import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@material-ui/core';
import NavBar from "../../NavBar/NavBar"
import { data } from '../services/handMadePromis';
import { Box } from '@mui/material';





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
             <NavBar />
         
              
           
                
           
   
 
                
                     <Box border={2}  sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            p: 1,
                                            m: 1,
                                            bgcolor: 'background.paper',
                                            }}>


                <h1>{p.title}</h1>
                <img src={p.image} className="imagen" alt = 'imagen'></img>
                    <Box sx={{ flexDirection: 'column'}}>
                    <h3>{p.descripcion}</h3> 
                    <h4>Precio: {p.price}</h4>
                    <h5>Cantidades diponibles: {p.stock}</h5> 
                    </Box>            
                   
                    </Box>
              
            


             
                
                <Button variant="contained" color="primary" ><ArrowBackIcon/>
                <Link to="/" className="link">Regresar</Link>
                </Button>


    
        </div>
    )

    
}

export default Product

