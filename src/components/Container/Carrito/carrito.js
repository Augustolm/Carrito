import React, { useState }  from 'react'
import { Box, Button} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {  compra  } from '../Provider/Cantidadcart';


export const Carrito = () => {

 


    //en caso de generar el json por medio de localstorage

    const result1 = compra.filter(x => x.id !== 0 || x.estate === true );

    const [stet, setstet] = useState(result1)

  
  
    //const init = JSON.parse(localStorage.getItem('Cantaidad'));
     
    
   
       const handlDelete = (id) => {
          
          const filterdelet = compra.filter(filt => filt.id !== id)
          
          setstet(filterdelet)
        console.log(id);
        
        console.log(filterdelet);
        
        }
    
    // const carrito = data.filter(o => o.id === result1.id)

    //     console.log(carrito);

     const tem = stet.map( t =>  t.price)
     

       // console.log('este es el precio',tem);
    let result = 0;

    for(let i = 0 ; i < tem.length; i++)
    {
        result += parseInt(tem[i])
    }



    


    return (
        <div>
            <h1>Su carrito</h1>
                    
                        
                                    <Grid container>
                                            {
                                                stet.map( p => {
                                                   
                                                    return(
                                                        <Grid item xs={3.5} >
                                                            <Box border={2} margin={3}>
                                                        
                                                            <h2>{p.title}</h2>
                                                            <img src={p.image} className="imagen" alt = 'imagen'></img>
                                                            <hr  />
                                                            <h3>Cantidad: {p.cantidad}</h3>
                                                            <h3> ${p.price}</h3>
                                                            
                                                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} 
                                                                onClick={() => handlDelete(p.id)}
                                                            >Eliminar</Button>
                                                        </Box>
                                                        </Grid>
                                                    )
                                                    })
                                            }
                                    </Grid>

                              
           <hr  />
                 <h1>Total a pagar: ${result}</h1>





           
            


            <Button variant="contained" color="primary">Finalizar compra</Button>
            <hr  />
            <Button variant="contained" color="primary" ><ArrowBackIcon/>
            <Link to="/" className="link">Regresar</Link>
            </Button>
           

            
        </div>
    )
}
