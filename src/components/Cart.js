import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import { BsFillTrashFill } from 'react-icons/bs';

const Cart = ({ item }) => {

  const { removeCartItem } = useContext(CartContext);
  const { id, title, quantity, price, imageUrl, description, itemsPrice } = item;

  return (
    <div className="container-fluid border-top border-bottom border-dark rounded p-2" style={{"backgroundColor": "#c6c9c8"}}>
      <div className="row">
        <div className="col-4">
          <Link to={`/detail/${id}`}>
            <img className="img-fluid img-thumbnail" src={imageUrl} alt={title}></img>
          </Link>
        </div>
        <div className="col-4">
          <Link to={`/detail/${id}`} className="text-black" style={{textDecoration: 'none'}}>
            <h5 className="card-title">{title}</h5>
          </Link>
          <hr />
          <p className="card-text">{description.slice(0, 70)} ...</p>
          <hr />
          <p className="card-text">Cantidad: {quantity}</p>
        </div>
        <div className="col-4">
          <button className="btn btn-outline-danger float-right" style={{float: "right"}}onClick={() => removeCartItem(item.id)}>
            <BsFillTrashFill />
          </button>
          
          <div className="p-2 mb-2 mt-5">
            <p>Precio unitario: ${price}</p>
            <hr />
            <p>Precio Total: ${itemsPrice}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart