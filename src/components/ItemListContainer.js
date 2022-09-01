import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getData from '../helper/helper';

const ItemListContainer = ({titulo}) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData.then(data => {
      setData(data)
      setLoading(false)
    })
  }, [])

  // cuando traigo la data de los items, el loading pasa a false y se muestran los items

  return (
    <>
      <h2>{titulo}</h2>
      <hr />
      <ItemList loading = {loading} data = {data}/>
    </>
  )
}

export default ItemListContainer;