import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Destinos from "./pages/Destinos"
import Precios from "./pages/Precios";
import MiViaje from "./pages/MiViaje";
import CRUD from "./pages/CRUD";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

export function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Precios" element={<Precios/>} />
        <Route path="/MiViaje" element={<MiViaje/>} />
        <Route path="/CRUD" element={<CRUD/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
