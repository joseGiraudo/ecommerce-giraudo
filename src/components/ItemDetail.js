import React, { useEffect, useState } from 'react';

const ItemDetail = ({ item }) => {


  const {id, title, price, image, description} = item;

  return (
    <>
      <div className='w-75'>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <img className="card-img-top h-auto" src={image} alt="Card image cap" />
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail;