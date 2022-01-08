import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function Categorias() {
    return (
        <div>
               
            <ButtonGroup variant="text" aria-label="text button group">
            <Button><Link to = "categoriMicro">Microprocesador</Link></Button>
            <Button><Link to = "categoriPeriferi">Perifericos</Link></Button>
            <Button><Link to = "categoriPv">Placas de Video</Link></Button>
            </ButtonGroup>

            <hr />
        </div>
    )
}

export default Categorias
