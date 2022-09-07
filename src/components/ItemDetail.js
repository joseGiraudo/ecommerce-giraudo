import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  console.log("item: ", item);
  const {id, title, price, image, description} = item;

  const agregarProducto = (cant) => {
    console.log(`Agregar ${cant} de producto al carrito`);
  }

  return (
    <>
      <div className='w-75 p-5'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top h-auto" src={image} alt={title} />
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
                    stock = {7}
                    initial = {1}
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