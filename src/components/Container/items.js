import ItemCount from "./itemCount"

const Item = ({descripcion, price, stock, title, initials, image, id})=> {

  
    return(
        <div id={id} className="borderCard" onPointerEnter={ (e) => console.log(e) }>
            <img src={image} className="imagen"></img>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{descripcion}</p>
            
            <ItemCount stock={stock} initials={initials}/>
        </div>
    )
}
export default Item