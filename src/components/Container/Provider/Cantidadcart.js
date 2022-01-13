import React, { useState } from 'react'




// export const CustomHook = () => {
    
// let carts = 0
// const [compra, setCompra] = useState([])


// return {carts, compra,  setCompra};
// }

let carts = 0

let compra = [{}]


  
// const setCompra = obj => compra = {...obj}
const setCompra = obj => (compra.push(obj))

const CartsContext = React.createContext(null);



export {carts, compra,  setCompra};
export default CartsContext
