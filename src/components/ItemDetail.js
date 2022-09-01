import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  const {id, title, price, image, description} = item;

  const agregarProducto = (cant) => {
    console.log(`Agregar ${cant} de producto al carrito`);
  }

  return (
    <>
      <div className='w-75 p-5'>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <img className="card-img-top h-auto" src={image} alt="Card image cap" />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <h5 class="card-text pt-4">$ {price}</h5>
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