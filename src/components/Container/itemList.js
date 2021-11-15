import Item from './items'

const ItemList  = ({products}) => {
    console.log('products en itemList', products)
    return(
        <div>
            {products.map(product => {
                return(
                <Item 
                key = {product.id}
                description = {product.descripcion}
                category = {product.categoria}
                image = {product.image}
                price = {product.price}
                stock = {product.stock}
                title = {product.title}
                />
                )
                
            })
            }
        </div>
    )
}


export default ItemList