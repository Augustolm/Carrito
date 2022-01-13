import React, {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import { carts, compra,  setCompra  } from './Provider/Cantidadcart';




const ItemCount = ( {stock, initials, id, image, title, price, descripcion} ) => {
    
    
    

    
    // let p = useContext(carts) 
      
    
    
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
    
    const [local, setLocal] = useState(count)
    
    
    useEffect(() => {
        
        localStorage.setItem('Cantaidad', JSON.stringify( {local, id} ))
    }, [local, id])
    
    const [compratest, setCompratest] = useState(false)
    const handleCompra = e =>{
       
       
       
       
       
        setCompra(
             [{
            id: id,
            name: title,
            price: price,
            descripcion: descripcion,
            image: image
            
             }]);
        
        // compra.find((item) => item.id === id));

        //setCompra -----------------testing--------
        // setCompra(!compra[0] ?
        //    [ {
        //    id: id,
        //    name: title,
        //    price: price,
        //    descripcion: descripcion,
        //    image: image
           
        //     }]
        //     : compra.find((item) => item.id === id)? 
        //     compra
        //     :
        //    [ {
        //     id: id,
        //     name: title,
        //     price: price,
        //     descripcion: descripcion,
        //     image: image
            
        //      },...compra]);
       
        console.log('aca va compra', compra);
       
        setCompratest(!compratest)
        
        //console.log(compra);
    }
        
    const onAdd = () => {
               
       
        
        
        handleCompra()
        //   Utilizo un condicional ternario (condicional) ? (true) : (false)
        count === 0 ? console.log('no se agrega produto')  :  setLocal(count);
        
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
