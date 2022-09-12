import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';


const CartContainer = () => {

  const { cartItemsList, clearCart } = useContext(CartContext);

  return (
    <div>
        {
          cartItemsList.length > 0 ?
            <>
              {
                cartItemsList.map( item => (
                  <Cart key={item.id} item={item} />
                ))
              }
              <button onClick={clearCart}>Vaciar carrito</button>
            </>
          :
            <p>Agrega productos al carrito</p>
          
        }
    </div>
  )
}

export default CartContainer;