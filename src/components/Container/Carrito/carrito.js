import React from 'react'
import { Box, Button} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { data } from '../services/handMadePromis';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



export const Carrito = () => {


    
    
    const init = JSON.parse(localStorage.getItem('Cantaidad'));
    
    
    
    
       const handlDelete = (e) => {
            e.preventDefault();
            localStorage.removeItem('Cantaidad')
        console.log(e);
        }
    


    const carrito = data.filter(o => o.id === init.id)
    const tem = carrito.map( t =>  t.price)
    const result = parseInt(tem) * init.local
    


    return (
        <div>
            <h1>Su carrito</h1>
                    
                        
                                    <Grid container>
                                            {
                                                carrito.map( p => {
                                                    console.log(p);
                                                    return(
                                                        <Grid item xs={3.5} >
                                                            <Box border={2} margin={3}>
                                                        
                                                            <h2>{p.title}</h2>
                                                            <img src={p.image} className="imagen" alt = 'imagen'></img>
                                                            <hr  />
                                                            <h3> ${p.price} X {init.local}</h3>
                                                            <Button variant="contained" color="primary">Comprar</Button>
                                                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} 
                                                                onClick={handlDelete}
                                                            >Eliminar</Button>
                                                        </Box>
                                                        </Grid>
                                                    )
                                                    })
                                            }
                                    </Grid>

                              
           <hr  />
           <h1>Total a pagar: ${result}</h1>


           
            




            <Button variant="contained" color="primary" ><ArrowBackIcon/>
            <Link to="/" className="link">Regresar</Link>
            </Button>

            
        </div>
    )
}
