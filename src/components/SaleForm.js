import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';


const SaleForm = ({ cartItemsList }) => {

  const [ sale, setSale ] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    products: [],
    date: "",
    total: 0
  })

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setSale({...sale, [e.target.name]: e.target.value})
  }

    const sendSaleData = (e) => {
        e.preventDefault();
        setSale({...sale, [e.target.name]: e.target.value})
        console.log(sale)
        alert('has realizado la compra exitosamente')
    }

    console.log(cartItemsList);

  return (
    <>
      <h4>Completa con tus datos</h4>
        <form onSubmit={sendSaleData}>
          <div className="row p-1">
            <div className="col p-1">
              <input type="text" required={true} className="form-control" name="name" 
              onChange={handleChange} placeholder="Nombre" />
            </div>
            <div className="col p-1">
              <input type="text" required={true} className="form-control" name="surname" 
              onChange={handleChange} placeholder="Apellido" />
            </div>
          </div>
          <div className="row p-1">
            <div className="col p-1">
              <input type="email" required={true} className="form-control" name="email" 
              onChange={handleChange} placeholder="e-mail" />
            </div>
            <div className="col p-1">
              <input type="number" required={true} className="form-control" name="phone" 
              onChange={handleChange} placeholder="Numero de Tel." />
            </div>
          </div>
          <input className="btn btn-primary float-right" type="submit" />
        </form>
    </>
  )
}

export default SaleForm