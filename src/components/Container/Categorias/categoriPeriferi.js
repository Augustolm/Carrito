import React from 'react'
import { Box, Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Item from '../items';
import { CargaFirebase } from '../Provider/CargaFirebase';



function CategoriPeriferi() {


    let micros = CargaFirebase()
   
    const micro = micros.filter(o => o.categoria === 'perifericos')
    console.log(micro)
    

    return (
        <div>
              <NavBar />

         

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


                <Button variant="contained" color="primary" ><ArrowBackIcon/>
                <Link to="/" className="link">Regresar</Link>
                </Button>
        </div>
    )
}

export default CategoriPeriferi
