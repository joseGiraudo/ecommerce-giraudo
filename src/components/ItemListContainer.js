import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ItemListContainer = () => {

  const { categoryName } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async() => {
      try {
          let queryRef
          if(!categoryName) {
            queryRef = collection(db, "items"); // consulta a la db sin condicion
          } else {
            queryRef = query(collection(db, "items"), where("category", "==", categoryName))
          }
          const response = await getDocs(queryRef);
          const docs = response.docs

          const datos = docs.map( doc => {
              return {...doc.data(), id: doc.id}
          });

          setData(datos);
          setLoading(false);
          
        } catch (error) {
            console.log(error)
        }
    }
        getData()
      
  
  }, [categoryName]);

  //console.log("datos", data)

  // cuando traigo la data de los items, el loading pasa a false y se muestran los items

  return (
    <>
    <br/>
      {
        loading ? <h3> Cargando...</h3> 
        :
        <ItemList data = {data}/>
      }
    </>
  )
}

export default ItemListContainer;