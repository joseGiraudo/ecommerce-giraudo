import React from 'react';

const SaleForm = ({ cartItemsList }) => {


    const sendSaleData = (e) => {
        e.preventDefault();
        console.log(e);
    }

    console.log(cartItemsList);

  return (
    <div className="container w-75 p-2 rounded" style={{"backgroundColor": "#f7fae8"}}>
      <h4>Finaliza la compra de los siguientes productos</h4>

      <div>
        {
          cartItemsList.map(item => (
            <>
              <h6 className="mx-2 p-2">{item.quantity} x {item.title}</h6>
            </>
          ))
        }
      </div>
      
      <h4>Completa con tus datos</h4>
        <form>
          <div className="row p-1">
            <div className="col p-1">
              <input type="text" required={true} className="form-control" placeholder="Nombre" />
            </div>
            <div className="col p-1">
              <input type="text" required={true} className="form-control" placeholder="Apellido" />
            </div>
          </div>
          <div className="row p-1">
            <div className="col p-1">
              <input type="email" required={true} className="form-control" placeholder="e-mail" />
            </div>
            <div className="col p-1">
              <input type="number" required={true} className="form-control" placeholder="Numero de Tel." />
            </div>
          </div>
          <input className="btn btn-primary float-right" type="submit" onSubmit={sendSaleData}/>
        </form>


    </div>
  )
}

export default SaleForm