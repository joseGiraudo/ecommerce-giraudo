import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import NavBar from './components/NavBar';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';

const estilos = {
  backgroundColor: 'blue',
  color: 'white'
}
const agregarProducto = (cant) => {
  console.log(`Agregar ${cant} de producto al carrito`);
}

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer />
      <hr />
      <Contador 
        stock = {7}
        initial = {1}
        agregarProducto = {agregarProducto}
      />

    </div>
  );
}

export default App;
