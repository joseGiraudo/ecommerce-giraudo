import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({titulo}) => {
  return (
    <>
      <h2>{titulo}</h2>
      <h4>Luego se iran cargando los productos</h4>
      
      <ItemList />
    </>
  )
}

export default ItemListContainer;