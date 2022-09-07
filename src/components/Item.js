import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({data}) => {


  // Tengo que pasarle la data desde algun lugar
  const {id, title, category, price, image, description} = data;
  return (
    <>
      <div className="card-group col mb-4 w-30">
            <Link to={`/detail/${id}`} className="card text-black" style={{textDecoration: 'none', hover: 'zoom-in'}} key={id}>
                <img className="card-img-top h-auto" src={image} alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description.slice(0, 70)} ...</p>
                </div>
                <small className="text-muted p-2">{category}</small>
                <div className="card-footer">
                  <small className="text-muted">Precio: ${price}</small>
                </div>
          </Link>
        </div>
    </>
  )
}

export default Item;