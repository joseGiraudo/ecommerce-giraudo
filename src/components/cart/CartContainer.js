import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from './Cart';
import { Link } from 'react-router-dom';


const CartContainer = () => {

  const { cartItemsList, clearCart, getTotalPrice } = useContext(CartContext);

  let totalPrice = getTotalPrice();

  return (
    <div>
        {
          cartItemsList.length > 0 ?
            <div className="container align-items-center p-2">
              <div className="row">
                <div className="col-8">
                  <ul className="list-group align-items-center">
                    {
                      cartItemsList.map( item => (
                        <Cart key={item.id} item={item} />
                      ))
                    }
                  </ul>
                  <Link type="button" to="/" className="btn btn-outline-dark w-50">Continuar comprando</Link>
                  <button className="btn btn-outline-danger w-50" onClick={clearCart}>Vaciar carrito</button>
                </div>
                <div className="col-1"></div>
                <div className="card col-3 bg-gradient-primary flex-column">
                  <h5 className="card-header text-center ">Resumen de tu compra</h5>
                  <div className="d-flex p-2 mt-3 bg-light justify-content-between align-middle">
                    <p className="text-start">Total: </p>
                    <p className="text-end fw-bold">$ {totalPrice}</p>
                  </div>
                  <div className="d-flex align-items-end">
                    <Link type="button" to="/sale" className="btn btn-primary w-100 align-middle">Finalizar compra</Link>
                  </div>
                  
                </div>
              </div>
            </div>
          :
            <div className="container align-items-center p-2">
              <h5 className="p-2 my-5 text-center">No tienes productos en el carrito :(</h5>
              <Link type="button" to="/" className="btn btn-light w-100">Comenzar una compra</Link>
            </div>
          
        }
    </div>
  )
}

export default CartContainer;