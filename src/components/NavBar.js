import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
          <div class='dropdown'>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorías
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Primer categoria</a>
              <a class="dropdown-item" href="#">Segunda categoria</a>
              <a class="dropdown-item" href="#">Tercer categoria</a>
            </div>
          </div>
        </ul>
      </div>
      
    </nav>
  )
}

export default NavBar;