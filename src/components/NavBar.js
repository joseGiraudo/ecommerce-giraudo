import React, { useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import CartWidget from './CartWidget';
import companyLogo from '../assets/images/companyLogo.jpg';
import { CartContext } from '../context/CartContext';

const NavBar = () => {

  const location = useLocation();

  const { cartItemsList, getTotalItems, clearCart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <NavLink className="navbar-brand d-inline-block align-top mx-3" to="/" onClick={location.pathname === "/sale" ? clearCart : null}>
        <img  src={companyLogo}  height="50" width="50"  style={{borderRadius: "5px"}} alt="Company logo" />
        <p style={{display: "inline-block", marginLeft: "7px"}}>FURNITURE</p>
      </NavLink>

      { 
        location.pathname !== "/sale" ?
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/company">Empresa</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sale-detail">Revisar Compra</NavLink>
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
        : null
      }      
      {
        getTotalItems(cartItemsList) > 0 && location.pathname !== "/sale" ? 
          <div className="btn-group dropstart dropleft" role="group" style={{marginLeft: "auto"}}>
            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="visually-hidden"></span>
            </button>
            
            <ul className="dropdown-menu mt-5" style={{"right": "30px"}}>
              {
                cartItemsList.map(item => (
                  <li key={item.id}>
                    <NavLink className="dropdown-item" to={`/detail/${item.id}`}>{item.quantity} x {item.title}</NavLink>
                    <div className="dropdown-divider"></div>
                  </li>
                ))
              }
            </ul>
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