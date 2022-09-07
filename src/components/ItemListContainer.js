import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getData from '../helper/helper';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const { categoryName } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData.then(data => {
      if(!categoryName) {
        setData(data);
        setLoading(false);
      } else {
        const listaFiltrada = data.filter(item => item.category === categoryName);
        setData(listaFiltrada);
        setLoading(false);
      }
    })
  }, [categoryName])

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