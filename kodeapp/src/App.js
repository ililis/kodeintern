import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './comps/Navbar';
import AppRouter from './comps/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
