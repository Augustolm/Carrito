import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"


export const ListProduct = () => {
    
    
    const [productosdata, setProductoData] = useState([])
    
   

    const db = getFirestore();
    
    useEffect( async() => {
        await getProducto()
    
    }, [])
    
    

    const getProducto = async () => {
        const products = []
        const querySnapshot = await getDocs(collection(db,'itms'));
        querySnapshot.forEach((doc) => {
           // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            const data= doc.data()
            products.push(
                {
                    id: data.id,
                    image: data.image,
                    title: data.title,
                    descripcion: data.descripcion,
                    categoria: data.categoria,
                    price: data.price,
                    stock: data.stock,
                    initials: data.initials
                }

            )
            
        });
        setProductoData(products) 
        }

    console.log(productosdata);
    

    return (
        <div>
            
            
        </div>
    )
}
