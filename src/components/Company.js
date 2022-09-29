import React from 'react';
import company from '../assets/images/company.jpg'

const Company = () => {
  return (
    <div className="">
      <div className="card mb-3 p-4">
        <div className="card-body col-8">
          <p className="card-text w-75"><small className="text-muted">Información de la empresa</small></p>
          <h5 className="card-title">Furniture Muebles</h5>
          <p className="card-text">Empresa de muebles ubicada en Sunchales, Santa Fe. <br />
          Desde el año 2000 se dedica a la confección y venta de muebles estándares y a medida. Por mas de 20 años en el mercado, siempre destacó por la calidad y la relacion con sus clientes</p>
          <p className="card-text"><small className="text-muted"></small></p>
        </div>
      </div>
    </div>
  )
}

export default Company;