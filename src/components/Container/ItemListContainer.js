import React from 'react';
import ItemList from './itemList';
import Typography from '@mui/material/Typography';
import { CargaFirebase } from './Provider/CargaFirebase';


const ItemListContainer = ( {greeting} ) => {
 
    return (
        <div id='Principal' >
            <Typography variant="h2" color="initial" align='center'> { greeting }</Typography>
            <ItemList products={CargaFirebase()} />
           
        </div>
    )
};


export default ItemListContainer
