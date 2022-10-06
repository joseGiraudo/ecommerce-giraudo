import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsClipboardCheck } from 'react-icons/bs';


const SaleForm = ({ cartItemsList, totalPrice, clearCart }) => {

  const [ orderId, setOrderId ] = useState("");
  const [ orderSuccess, setOrderSuccess ] = useState(false);

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
      date: new Date().toLocaleString(),
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

  const copyOrder = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(orderId);
    Swal.fire({
      icon: 'success',
      text: 'Id de orden copiada',
      showConfirmButton: false,
      timer: 800,
      position: 'bottom-left',
      width: 400
    });
  }

  return (
    <>
      {
        orderSuccess ?
          <div className="">
            <h4 className="p-2">Felicitaciones, tu compra fue cargada.</h4>
            <h6 className="p-2">Con el siguiente código, podras revisar el estado de compra:</h6>
            <div className="d-flex mb-4 align-items-center mx-4">
              <h6 className="text-bottom">Guarda el código de compra: <b>{orderId}</b></h6>
              <button className="btn btn-outline-success mx-4" onClick={(e) => copyOrder(e)}><BsClipboardCheck /></button>
            </div>
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
            <input className="btn btn-primary w-100 mt-3" type="submit" />
          </form>
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-outline-danger w-25 mt-5 center">Cancelar compra</Link>
          </div>
        </div>
      }


    </>
  )
}

export default SaleForm