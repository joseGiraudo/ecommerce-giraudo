import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <NavLink className="navbar-brand" to="/">
        Nombre Empresa
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
          <div className='dropdown'>
            <button className="btn  btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorías
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <NavLink className="dropdown-item" to="/category">Primer categoria</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/category">Segunda categoria</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/category">Tercer categoria</NavLink>
            </div>
          </div>
        </ul>
      </div>
      
      <div className="btn-group" style={{marginLeft: "auto"}}>
        <div className="btn-group dropleft" role="group">
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only"></span>
          </button>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to="/category">Primer categoria</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="/category">Segunda categoria</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="/category">Tercer categoria</NavLink>
          </div>
        </div>
        <button type="button" className="btn btn-secondary">
          Split dropleft
        </button>
      </div>
    </nav>
  )
}

export default NavBar;