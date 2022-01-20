import React,{ useEffect, useState } from 'react';
import {collection, getDocs} from "firebase/firestore"
import db from '../services/firebase';

export const CargaFirebase = () => {

  const [carritoproduct, setCarritoproduct] = useState([]);

  const init = async () => {
    const collecti =  collection(db, 'product')  
    const queryProduct = await getDocs(collecti)
   
    setCarritoproduct(queryProduct.docs.map(el => {
        return {...el.data(), id: el.id}
    }))
    
  console.log('Sin map',queryProduct.docs);
    
}

console.log('eLuego del map',carritoproduct);

useEffect(() => {
 
        init()
    }, [])
   return carritoproduct;
};







