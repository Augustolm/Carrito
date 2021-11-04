import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';


const ItemListContainer = ( {greeting} ) => {

    //console.log(greeting)
    //handleAdd
    const handleAdd = (e) => {
        console.log(e)
    }


    return (
        <div>
            <h1> { greeting } </h1>
            <Button  onClick= { handleAdd } variant="contained" color="primary">
              +1 
            </Button>
            <Button onClick= { handleAdd } variant="contained" color="secondary">
              -1 <DeleteIcon color= 'whait'/>
            </Button>
           
        </div>
    )
}


export default ItemListContainer
