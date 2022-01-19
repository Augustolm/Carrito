import React, {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import {  setCompra, compra  } from './Provider/Cantidadcart';

//carts se utilizara para mostrar las cantidade de compras en el carrito
//compras tendra los resultados de visualizacion en product.js



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


    // function addToCart(item) {
    //     let list = [...cart]
    //     if(list.some(e => e.id === id)){
    //         list.find(e => e.id === id).quantity += quantity
    //         setCart(list)
    //     }else{
    //         setCart([...cart, item])
    //     }
    // }


    // function addToCart(item) {
    //     let list = [...cart]
    //     if(list.some(e => e.item.id === item.item.id)){
    //         list.find(e => e.item.id === item.item.id).quantity += item.quantity
    //         setCart(list)
    //     }else{
    //         setCart([...cart, item])
    //     }
    // }



 
    const handleCompra = e =>{
        const sumTotal = price * count

        
        
      
        count == 0  || id == setCompra.id  ? 
        console.log('aca no') 
        
        : 

     
        setCompra({
            id: id,
            name: title,
            price: sumTotal,
            descripcion: descripcion,
            image: image,
            cantidad: count,
            estate: true
        });
            
          
            setCompratest(!compratest)
            
        }
        
        const onAdd = () => {
            
            
            let list = [...compra]
             if(compra.some(e => e.id === id)) {
                 list.find(e => e.id === id).cantidad += count
                 setCompra(...list)
                 console.log('verdadero',compra);
             } else {
                 handleCompra()
                 console.log('falso', list);
                //   Utilizo un condicional ternario (condicional) ? (true) : (false)
                count === 0 ? alert('No puede agregar 0 productos')  :  setLocal(count);
             }
             
           

            
            
           
        
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
