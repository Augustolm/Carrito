const Item = ({descripcion, price, stock, title})=> {
    

    return(
        <div>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{descripcion}</p>
            <p>{stock}</p>
        </div>
    )
}
export default Item