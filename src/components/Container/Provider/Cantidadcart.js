import React  from 'react'




// export const CustomHook = () => {
    
// let carts = 0
// const [compra, setCompra] = useState([])


// return {carts, compra,  setCompra};
// }


//const { carritoproduct } = CargaFirebase()

let carts = 0

let compra = []

let carro = []

  
// const setCompra = obj => compra = {...obj}
const setCompra = obj => (compra.push(obj))

const setCompra2 = obj => (carro.push(obj))



const CartsContext = React.createContext(null);



export {carts, compra,  setCompra, carro, setCompra2};
export default CartsContext
