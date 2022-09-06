import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import companyLogo from '../assets/images/companyLogo.jpg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <NavLink className="navbar-logo d-inline-block align-top mx-3" to="/">
        <img  src={companyLogo}  height="50" width="50"  alt="Company logo" />
      </NavLink>
      <div className="">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/company">Empresa</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contacto</NavLink>
          </li>
          <div className='dropdown mx-2'>
            <button className="btn  btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorías
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <NavLink className="dropdown-item" to="/category/modulares">Modulares</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/category/roperos">Roperos</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/category/sillones">Sillones</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/category/sillas">Sillas</NavLink>
            </div>
          </div>
        </ul>
      </div>
      
      <div className="btn-group" style={{marginLeft: "auto"}}>
        <div className="btn-group dropleft" role="group">
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only"></span>
          </button>
          <div className="dropdown-menu p-2 mt-5">
            <NavLink className="dropdown-item" to="/category">Item 1</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="/category">Item 2</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="/category">Item 3</NavLink>
          </div>
        </div>
        <button type="button" className="btn btn-secondary">
          <CartWidget />
        </button>
      </div>
    </nav>
  )
}

export default NavBar;