import React from 'react';
import ItemCount from './itemCount';

const ItemListContainer = ( {greeting} ) => {


    return (
        <div>
            <h1> { greeting } </h1>
            <ItemCount stock={5} initials={1}/>
        </div>
    )
};


export default ItemListContainer
