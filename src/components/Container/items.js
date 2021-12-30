import { Paper } from "@mui/material"
import { Link } from "react-router-dom"
import ItemCount from "./itemCount"

const Item = ({descripcion, price, stock, title, initials, image, id})=> {

   
  
    return(
        <div  className="borderCard" >
           <Paper elevation={5}>
            <Link to = {`/producto/${id}`} >
            <img src={image} className="imagen" alt = 'imagen'></img>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{descripcion}</p>
            </Link>
            <ItemCount stock={stock} initials={initials}/>
            
            </Paper>
        </div>
    )
}
export default Item