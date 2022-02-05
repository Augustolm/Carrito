import React, { useEffect, useState } from 'react'
import { Box, Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Item from '../items';
import { CargaFirebase } from '../Provider/CargaFirebase';
import CircularProgress from '@mui/material/CircularProgress';


function CategoriPeriferi() {

    
    const [loading, setLoading] = useState(false);

    let perifericos = CargaFirebase()

    useEffect(() => {
        if (perifericos[0] ) {
            setLoading(true)
        }else {
            setLoading(false)
        }
    }, [perifericos]);
    
   
    const micro = perifericos.filter(o => o.categoria === 'perifericos')
    
    

    return (
        <div>
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
        </div>
    )
}

export default CategoriPeriferi
