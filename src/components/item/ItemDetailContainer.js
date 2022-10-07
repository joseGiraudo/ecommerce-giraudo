import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useParams } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const ItemDetailContainer = () => {

  const { itemId } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async() => {
      const queryRef = doc(db, "items", itemId); 
      await getDoc(queryRef)
        .then(res => {
          const dato = { ...res.data(), id: res.id }
          setData(dato)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
      })
    }
    getData()

  }, [itemId])
  return (
    <>
      {
        loading ? <Spinner />
        :
        <div className="d-flex align-items-center justify-content-center" >
          <ItemDetail item = {data} />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer;