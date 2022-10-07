import React from 'react';

const Contact = () => {
  return (
    <div className="">
      <div className="card mb-3 p-4">
        <div className="card-body col-8">
          <h5 className="card-title">Contáctate con nosotros</h5>
          <p className="card-text">e-mail: furniture@correo.com</p>
          <p className="card-text">telefono: 123-456789</p>
          <p className="card-text">dirección: Evergreen Terrace 742   <a href="https://www.google.com/maps/place/712+Red+Bark+Ln,+Henderson,+NV+89011,+EE.+UU./@36.0773839,-115.0175319,630m/data=!3m1!1e3!4m5!3m4!1s0x80c8d0b89793735f:0x82738f1bb7cadcb8!8m2!3d36.0773796!4d-115.0153432" target="_blank" rel='noreferrer'>Ver en Maps</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact;