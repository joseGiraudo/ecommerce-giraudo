import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getData from '../helper/helper';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData
      .then(res => {
        setData(res.find(item => item.id === 2))
        setLoading(false)
      })
  }, [])
  return (
    <>
      {
        loading ? <h3>cargando...</h3>
        :
        <div className="d-flex align-items-center justify-content-center" >
          <ItemDetail item = {data} />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer;