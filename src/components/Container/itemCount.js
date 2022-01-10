import React, {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';


const ItemCount = ( {stock, initials, id} ) => {

  
    //console.log(greeting)
    //handleAdd
    const [count, setCount] = useState(0)

    const addItem = () => {
        const newValue = count + 1;
        if(newValue <= stock) {
            setCount(newValue)
        }
    }

    const quitItem = () => {
        const newValue = count - 1;
        if(newValue >= initials) {
            setCount(newValue)
        }
    }

    useEffect(() => {
        localStorage.setItem('Cantaidad', JSON.stringify( {count, id} ))
    }, [count])
  
    

    const onAdd = () => {

        const guardar = count
        console.log(guardar);
        const message = `Agregaste ${count} producto`;
        //   Utilizo un condicional ternario (condicional) ? (true) : (false)
        count === 1 ? alert(message) : alert(`${message}s`);


      
    

      };


    return (
        <div>
            <h4> Stock: { stock - count } </h4>
            <Button  onClick= { addItem } variant="contained" color="primary">
            { count } 
            </Button>
            
            
            <Button onClick= { quitItem } variant="contained" color="secondary">
              -1 <DeleteIcon color= 'whait'/>
            </Button>
            <Button  onClick= { onAdd } variant="contained">ADD</Button>
           
        </div>
    )
}


export default ItemCount
