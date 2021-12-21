import ItemCount from "./itemCount"

const Item = ({descripcion, price, stock, title, initials})=> {
    

    return(
        <div>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{descripcion}</p>
            
            <ItemCount stock={stock} initials={initials}/>
        </div>
    )
}
export default Item