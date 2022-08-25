import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

const estilos = {
  backgroundColor: 'blue',
  color: 'white'
}
const agregarProducto = (cant) => {
  console.log(`Agregar ${cant} de producto al carrito`);
}
const titulo = "Aquí se observaran los diferentes productos que se ofrezcan en la pagina";


function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer
        titulo = {titulo}
      />
      <hr />
      <ItemCount 
        stock = {7}
        initial = {1}
        agregarProducto = {agregarProducto}
      />

    </div>
  );
}

export default App;
