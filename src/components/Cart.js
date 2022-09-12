import { type } from '@testing-library/user-event/dist/type';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = ({ item }) => {

  const { removeCartItem } = useContext(CartContext);

  return (
    <div>
        Aquí se podrá ver el carrito de compra y editarlo
        <p>{item.title}</p><p>{item.quantity}</p>
        <button onClick={() => removeCartItem(item.id)}>Remove item</button>
    </div>
  )
}

export default Cart