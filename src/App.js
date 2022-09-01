import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const estilos = {
  backgroundColor: 'blue',
  color: 'white'
}

const titulo = "Aquí se observaran los diferentes productos que se ofrezcan en la pagina";


function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <ItemListContainer
        titulo = {titulo}
      />
      <hr /> */}
      
      <ItemDetailContainer />
    </div>
  );
}

export default App;
