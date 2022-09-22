import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const SaleForm = ({ cartItemsList, totalPrice, clearCart }) => {

  const [ orderId, setOrderId ] = useState("");
  const [ orderSuccess, setOrderSuccess ] = useState(false)

  const reStock = (prodList) => {
    prodList.forEach(prod => {
      const queryRef = doc(db, "items", prod.id);
      const newStock = prod.stock - prod.quantity;
      updateDoc(queryRef, {stock: newStock})
        .then(console.log(`Stock de ${prod.title} actualizado. Nuevo stock: ${newStock}`))
      
    });
    setOrderSuccess(true);
  }
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

    e.target.reset();
    Swal.fire({
      icon: 'success',
      title: 'Tu compra fue procesada',
      showConfirmButton: false,
      timer: 1500
    });
    
    reStock(cartItemsList);
  }

    console.log(cartItemsList);

  return (
    <>
      {
        orderSuccess ?
          <div className="align-items-center">
            <h4 className="p-2">Felicitaciones, tu compra fue cargada.</h4>
            <h6 className="p-2 mb-4">Guarda el código de compra: <b>{orderId}</b></h6>
            <Link to="/" className="btn btn-secondary w-75" onClick={clearCart}>Volver al inicio</Link>
          </div>
        :
        <div>
          <h4>Finaliza la compra de los siguientes productos</h4>
              {
                cartItemsList.map(item => (
                    <h6 className="mx-2 p-2" key={item.id}>{item.quantity} x {item.title}</h6>
                ))
              }
        
            
            <h5>Precio Total: ${totalPrice}</h5>
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
        </div>
      }


    </>
  )
}

export default SaleForm