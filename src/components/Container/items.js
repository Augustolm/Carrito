import { Paper } from "@mui/material"
import { Link } from "react-router-dom"
import ItemCount from "./itemCount"

const Item = ({descripcion, price, stock, title, initials, image, id})=> {

  
  
    return(

    <>

        {
            (stock  >  0)
            ?
            (
                <div  className="borderCard" >
                   <Paper elevation={5}>
                    <Link to = {`/producto/${id}`} >
                    <img src={image} className="imagen" alt = 'imagen'></img>
                    <h3>{title}</h3>
                    <h2>$ {price}</h2>
                    <p>{descripcion}</p>
                    </Link>
                    <ItemCount stock={stock} initials={initials} id={id} image={image} title={title} price={price} descripcion={descripcion} />
                    
                    </Paper>
                </div>)
            :
            (
                <div  className="borderCard" >
                   <Paper elevation={5}>
                    <Link to = {`/producto/${id}`} >
                    <img src={image} className="imagen" alt = 'imagen'></img>
                    <h3>{title}</h3>
                    <h2>{price}</h2>
                    <p>SIN STOCK</p>
                    </Link>
                    <ItemCount stock={stock} initials={initials} id={id}  />
                    
                    </Paper>
                </div>)
        }


    </>
    )
}
export default Item