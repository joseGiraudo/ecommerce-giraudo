import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import SalesContainer from './components/sale/SalesContainer';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import CartContainer from './components/cart/CartContainer';
import SaleDetailContainer from './components/sale/SaleDetailContainer';


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
          <Route path="*" element={ <ItemListContainer />} />
          <Route path='/sale' element={ <SalesContainer /> } />
          <Route path='/sale-detail' element={ <SaleDetailContainer /> } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
