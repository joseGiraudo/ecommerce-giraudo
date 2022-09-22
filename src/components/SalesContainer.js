import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SaleForm from './SaleForm';

const SalesContainer = () => {

  const { cartItemsList, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="container p-2 justify-content-center">
      <div className="container w-75 p-2 rounded" style={{"backgroundColor": "#f7fae8"}}>
        <h4>Finaliza la compra de los siguientes productos</h4>
          {
            cartItemsList.map(item => (
                <h6 className="mx-2 p-2" key={item.id}>{item.quantity} x {item.title}</h6>
            ))
          }
          <h5>Precio Total: ${totalPrice}</h5>
        {
          cartItemsList.length > 0 ? 
            <SaleForm cartItemsList={cartItemsList} totalPrice={totalPrice}/>
          :
            <h4 className="p-3">Debes agregar productos al carrito para realizar una compra</h4>
        }
      </div>
    </div>
  )
}

export default SalesContainer