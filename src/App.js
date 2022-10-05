import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import SalesContainer from './components/SalesContainer';
import Company from './components/Company';
import Contact from './components/Contact';
import CartContainer from './components/CartContainer';
import PaginaFirebase from './components/PaginaFirebase';
import SaleDetailContainer from './components/SaleDetailContainer';


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
          <Route path="*" element={ <ItemListContainer />} />
          
          <Route path='/sale' element={ <SalesContainer /> } />
          <Route path='/sale-detail' element={ <SaleDetailContainer /> } />
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
