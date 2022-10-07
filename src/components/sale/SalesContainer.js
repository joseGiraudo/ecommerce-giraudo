import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import SaleForm from './SaleForm';

const SalesContainer = () => {

  const { cartItemsList, getTotalPrice, clearCart } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="container p-2 justify-content-center">
      <div className="container w-75 p-2 rounded" style={{"backgroundColor": "#f7fae8"}}>
        {
          cartItemsList.length > 0 ? 
              <SaleForm cartItemsList={cartItemsList} totalPrice={totalPrice} clearCart={clearCart} />
          :
            <h4 className="p-3">Debes agregar productos al carrito para realizar una compra</h4>
        }
      </div>
    </div>
  )
}

export default SalesContainer