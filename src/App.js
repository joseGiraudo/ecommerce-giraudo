import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Contact from './components/Contact';

const estilos = {
  backgroundColor: 'blue',
  color: 'white'
}

const titulo = "Aquí se observaran los diferentes productos que se ofrezcan en la pagina";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="/category/:categoryName" element={ <ItemListContainer />} />
        <Route path="/company" element={ <Company />} />
        <Route path="/contact" element={ <Contact />} />

        <Route path="*" element={ <ItemListContainer />} />
        
      </Routes>
    </Router>
  );
}

export default App;
