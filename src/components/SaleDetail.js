import React, { useState } from 'react';

const SaleDetail = ({ order }) => {

  const { buyer, date, products, total, id } = order;
  const { name, surname } = buyer;

  

  return (
    <div>
      <div>
        <h6 className="">Hola {name}, tu compra realizada la fecha {date} se encuentra en proceso.</h6>

        <div>
            <h4>Detalle de tu compra</h4>
            <ul>
              {
                products.map(item => (
                  <h6 className="mx-2 p-2" key={item.id}>{item.quantity} x {item.title}</h6>
                ))
              }
            </ul>
            <h5>Precio Total: ${total}</h5>

        </div>
      </div>
    </div>
  )
}

export default SaleDetail;