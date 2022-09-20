import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SaleForm from './SaleForm';

const SalesContainer = () => {

  const { cartItemsList } = useContext(CartContext);

  return (
    <div className="container p-2 justify-content-center">
      {
        cartItemsList.length > 0 ? 
          <SaleForm cartItemsList={cartItemsList}/>
        :
          <h4 className="p-3">Debes agregar productos al carrito para realizar una compra</h4>
      }
    </div>
  )
}

export default SalesContainer