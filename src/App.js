import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Rotas } from './Rotas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Rotas />
    </BrowserRouter>

  );
}

export default App;
