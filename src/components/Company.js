import React from 'react';
import company from '../assets/images/company.jpg'
import company2 from '../assets/images/company2.jpg'

const Company = () => {
  return (
      <div className="card mb-3 p-4">
        <div className="card-body col-12">
          <p className="card-text"><small className="text-muted">Información de la empresa</small></p>
          <h5 className="card-title">Furniture Muebles</h5>
          <p className="card-text">Empresa de muebles ubicada en Sunchales, Santa Fe. <br />
          Desde el año 2000 se dedica a la confección y venta de muebles estándares y a medida. Por mas de 20 años en el mercado, siempre destacó por la calidad y la excelente relacion con sus clientes</p>
          
        </div>
        <div className="justify-content-center">
          <div className="row p-2 mx-2">
            <img className="card-img-bottom col-5 rounded" style={{"width": "50%"}} src={company} alt="Company card image" />
            <img className="card-img-bottom col-5 rounded" style={{"width": "45%"}} src={company2} alt="Company card image 2" />
          </div>
          <small className="text-muted col ms-5 mt-2">Imágenes de la carpintería de la empresa, donde se trabaja con maderas de alta calidad para crear los muebles con la identidad Furniture.</small>
        </div>
      </div>
  )
}

export default Company;