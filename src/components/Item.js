import React from 'react';

const Item = ({data}) => {


  // Tengo que pasarle la data desde algun lugar
  const {id, title, price, image, description} = data;
  return (
    <>
        <div className="card" key={id}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Precio: ${price}</small>
            </div>
        </div>
    </>
  )
}

export default Item;