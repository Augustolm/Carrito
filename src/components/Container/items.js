import { Link } from "react-router-dom"
import ItemCount from "./itemCount"

const Item = ({descripcion, price, stock, title, initials, image, id})=> {

   
  
    return(
        <div id={id} className="borderCard" >
            <Link to = "/productos" >
            <img src={image} className="imagen"></img>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{descripcion}</p>
            </Link>
            <ItemCount stock={stock} initials={initials}/>
        </div>
    )
}
export default Item