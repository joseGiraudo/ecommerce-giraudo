import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';


const SaleForm = ({ cartItemsList, totalPrice }) => {

  const [ orderId, setOrderId ] = useState("");

    const sendSaleData = (e) => {
        e.preventDefault();
        const order = {
          buyer: {
            [e.target[0].name]: e.target[0].value,
            [e.target[1].name]: e.target[1].value,
            [e.target[2].name]: e.target[2].value,
            [e.target[3].name]: e.target[3].value
          },
          products: cartItemsList,
          date: Date(),
          total: totalPrice
        }

        // referencia a la DB
        const queryRef = collection(db, "orders");
        // agregamos el doc
        addDoc(queryRef, order)
          .then(res => setOrderId(res.id))

        console.log(orderId);
        alert(`La compra se realizo correctamente, tu id de compra es : ${orderId}`)
        e.target.reset();

    }

    console.log(cartItemsList);

  return (
    <>
      <h4>Completa con tus datos</h4>
        <form onSubmit={sendSaleData}>
          <div className="row p-1">
            <div className="col p-1">
              <input type="text" required={true} className="form-control" name="name" 
                placeholder="Nombre" />
            </div>
            <div className="col p-1">
              <input type="text" required={true} className="form-control" name="surname" 
                placeholder="Apellido" />
            </div>
          </div>
          <div className="row p-1">
            <div className="col p-1">
              <input type="email" required={true} className="form-control" name="email" 
                placeholder="e-mail" />
            </div>
            <div className="col p-1">
              <input type="number" required={true} className="form-control" name="phone" 
                placeholder="Numero de Tel." />
            </div>
          </div>
          <input className="btn btn-primary float-right" type="submit" />
        </form>
    </>
  )
}

export default SaleForm