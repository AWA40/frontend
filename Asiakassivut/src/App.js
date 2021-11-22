import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Secondview from './Secondview';



function App() {
  return (
    <BrowserRouter>
    <div>
    <h1>Hello React Router</h1>
    <Home/>
    <Secondview/>
    </div>
    </BrowserRouter>
  );
}

export default App;
