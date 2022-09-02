import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getData from '../helper/helper';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const { itemId } = useParams();
  console.log("useParams: ", typeof(itemId))

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData
      .then(res => {
        setData(res.find(item => item.id === parseInt(itemId)))
        setLoading(false)
      })
  }, [itemId])
  return (
    <>
      {
        loading ? <h3>cargando...</h3>
        :
        <div className="d-flex align-items-center justify-content-center" >
          {console.log("data: ", data)}
          <ItemDetail item = {data} />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer;