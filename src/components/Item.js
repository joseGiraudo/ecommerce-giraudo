import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

const Item = ({data}) => {


  // Tengo que pasarle la data desde algun lugar
  const {id, title, category, price, imageUrl, description} = data;
  return (
    <>
      <div className="card mb-4 ">
        <Link to={`/detail/${id}`} className="text-decoration-none text-black item-hover" key={id}>
          <img className="card-img-top p-2" src={imageUrl} alt={title} />
        </Link>
        <div className="card-body">
          <Link to={`/detail/${id}`} className="text-decoration-none text-black item-hover" key={id}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0, 70)} ...</p>
          </Link>
        </div>
        <Link to={`category/${category}`} className="text-decoration-none cat-hover"><small className="text-muted p-2">{category}</small></Link>
        <div className="card-footer">
          <small className="text-muted">Precio: </small><small>${price}</small>
        </div>
      </div>
    </>
  )
}

export default Item;