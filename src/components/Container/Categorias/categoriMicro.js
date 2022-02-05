import React, { useEffect, useState } from 'react'
import { Box, Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Item from '../items';
import { CargaFirebase } from '../Provider/CargaFirebase';
import CircularProgress from '@mui/material/CircularProgress';


function CategoriMicro() {

    const [loading, setLoading] = useState(false);
    
    let micros = CargaFirebase()
  
    useEffect(() => {
        if (micros[0] ) {
            setLoading(true)
        }else {
            setLoading(false)
        }
    }, [micros]);
    
          
    const micro = micros.filter(o => o.categoria === "Procesadores")

    
    return (
        <>

            <NavBar />
           
            {loading ?
            <div>
               <Grid container>
              {
                  micro.map( p => {
                    
                      return(
                        <Grid item xs={3} >
                            <Box border={1} margin={3}>
                          <Item 
                          key = {p.id}
                          id = {p.id}
                          descripcion = {p.descripcion}
                          category = {p.categoria}
                          image = {p.image}
                          price = {p.price}
                          stock = {p.stock}
                          title = {p.title}
                          initials = {p.initials}
                          />
                         </Box>
                        </Grid>
                      )
                     
                  })
              }

            </Grid>
            </div>

              :
              <Box 
              display="flex" 
              alignItems="center"
              justifyContent="center"
              marginTop={20}
               >
                <CircularProgress  />
             </Box>
                }
            
            
            <Button variant="contained" color="primary" ><ArrowBackIcon/>
            <Link to="/" className="link">Regresar</Link>
            </Button>
        </>
    )
}



export default CategoriMicro
