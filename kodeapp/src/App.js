import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './comps/Navbar/Navbar';
import AppRouter from './comps/UI/AppRouter';

const deps = [
  {dir: "all", name: "Все"},
  {dir: "design", name: "Designers"},
  {dir: "analytics", name: "Analysts"},
  {dir: "management", name: "Managers"},
  {dir: "ios", name: "iOS"},
  {dir: "android", name: "Android"}
];

function App() {

  return (
    <BrowserRouter>
      <Navbar deps={deps}/>
      <AppRouter deps={deps}/>
    </BrowserRouter>
  );
}

export default App;
