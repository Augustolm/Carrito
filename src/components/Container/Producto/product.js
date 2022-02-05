import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button  } from '@material-ui/core';
import NavBar from "../../NavBar/NavBar"
import { Box } from '@mui/material';
import { CargaFirebase } from '../Provider/CargaFirebase';
import CircularProgress from '@mui/material/CircularProgress';


const Product = () => {

  const [loading, setLoading] = useState(false);

  let nuevaData = CargaFirebase()

  useEffect(() => {
    if (nuevaData[0] ) {
        setLoading(true)
    }else {
        setLoading(false)
    }
}, [nuevaData]);
    
    const {postId} = useParams();

    const p = nuevaData.find(o => o.id == postId)

 

    return(

        <>
        
        <NavBar />
        
                {loading ?
                
                    <div>
                    
                    <Box border={2} sx={{
                    
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
        
        </>
        
        )
        
        }

export default Product

