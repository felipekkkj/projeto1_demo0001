import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Rotas } from './Rotas';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Rotas />
    </BrowserRouter>

  );
}

export default App;
