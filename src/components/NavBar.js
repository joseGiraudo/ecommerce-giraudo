import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Nombre Empresa
      </a>
      <div className="">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Empresa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <div className='dropdown'>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorías
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Primer categoria</a>
              <a className="dropdown-item" href="#">Segunda categoria</a>
              <a className="dropdown-item" href="#">Tercer categoria</a>
            </div>
          </div>
        </ul>
      </div>
      
      <button className="btn btn-info" type='button'  >
          <CartWidget />
      </button>
    </nav>
  )
}

export default NavBar;