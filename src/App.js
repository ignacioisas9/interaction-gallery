import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Destinations from "./pages/Destinations"
import Prices from "./pages/Prices";
import MyTrip from "./pages/MyTrip";
import NotFound from "./pages/NotFound";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinations" element={<Destinations/>} />
        <Route path="/Prices" element={<Prices/>} />
        <Route path="/MyTrip" element={<MyTrip/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
