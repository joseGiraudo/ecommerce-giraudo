import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import companyLogo from '../assets/images/companyLogo.jpg';
import { CartContext } from '../context/CartContext';

const NavBar = () => {

  const { cartItemsList, getTotalItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <NavLink className="navbar-brand d-inline-block align-top mx-3" to="/">
        <img  src={companyLogo}  height="50" width="50"  style={{borderRadius: "5px"}}alt="Company logo" />
        <p style={{display: "inline-block", marginLeft: "7px"}}>FURNITURE</p>
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
      
      {
        getTotalItems(cartItemsList) > 0 ? 
          <div className="btn-group" style={{marginLeft: "auto"}}>
            <div className="btn-group dropleft" role="group">
              <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only"></span>
              </button>
              
              <div className="dropdown-menu mt-5" style={{"marginRight": "auto"}}>
                {
                  cartItemsList.map(item => (
                    <>
                      <NavLink className="dropdown-item d-flex" to={`/detail/${item.id}`}>{item.quantity} x {item.title}</NavLink>
                      <div className="dropdown-divider"></div>
                    </>
                  ))
                }
              </div>
            </div>
            <Link to="/cart"  type="button" className="btn btn-secondary">
              <CartWidget />
              <span className="badge ">{
                getTotalItems(cartItemsList)
              }</span>
            </Link>
          </div>
          :
          null
      }
      
    </nav>
  )
}

export default NavBar;