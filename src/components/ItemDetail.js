import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  const {id, title, price, imageUrl, description, stock} = item;

  const { addToCart } = useContext(CartContext);

  const initial = 1;

  const agregarProducto = (cant) => {
    addToCart(item, cant);
  }

  return (
    <>
      <div className='w-75 p-5'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top h-auto" src={imageUrl} alt={title} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <h5 className="card-text pt-4">$ {price}</h5>
                <div>
                  <ItemCount 
                    stock = {stock}
                    initial = {initial}
                    agregarProducto = {agregarProducto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail;