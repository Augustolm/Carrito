import Item from './items'


const ItemList  = ({products}) => {
    console.log('products en itemList', products)
    return(
        <div id="Interna" className='card'>
            {products.map(product => {
                return(
                <Item 
                key = {product.id}
                descripcion = {product.descripcion}
                category = {product.categoria}
                image = {product.image}
                price = {product.price}
                stock = {product.stock}
                title = {product.title}
                initials = {product.initials}
                />
                )
                
            })
            }
        </div>
    )
}


export default ItemList