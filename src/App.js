import logo from './logo.svg';
import './App.css';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import NavBar from './components/NavBar';

const estilos = {
  backgroundColor: 'blue',
  color: 'white'
}

function App() {
  return (
    <div className="App">
      <NavBar />

      <h3>Aqui se mostraran fotos y descripciones breves de los productos</h3>
    </div>
  );
}

export default App;
