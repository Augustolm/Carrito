import React from 'react'
import { Button} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";



export const Carrito = () => {
    return (
        <div>
            <h1>Aca va el contenido del carrito</h1>


            <Button variant="contained" color="primary" ><ArrowBackIcon/>
            <Link to="/" className="link">Regresar</Link>
            </Button>
        </div>
    )
}
