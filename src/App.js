import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import SalesContainer from './components/SalesContainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Contact from './components/Contact';
import CartContainer from './components/CartContainer';
import { CartProvider } from './context/CartContext';
import PaginaFirebase from './components/PaginaFirebase';

const estilos = {
  backgroundColor: 'blue',
  color: 'white'
}

const titulo = "Aquí se observaran los diferentes productos que se ofrezcan en la pagina";


function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer />} />
          <Route path="detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/category/:categoryName" element={ <ItemListContainer />} />
          <Route path="/company" element={ <Company />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/cart" element={ <CartContainer />} />
          <Route path='/firebase' element={ <PaginaFirebase /> } />
          <Route path='/sale' element={ <SalesContainer /> } />


          <Route path="*" element={ <ItemListContainer />} />
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
