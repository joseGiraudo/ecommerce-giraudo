import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({titulo}) => {
  return (
    <>
      <h2>{titulo}</h2>
      <hr />
      <ItemList />
    </>
  )
}

export default ItemListContainer;