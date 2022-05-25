import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Precios from "./pages/Precios";
import MiViaje from "./pages/MiViaje";
import CRUD from "./pages/CRUD";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop.js";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Destinos">
          <Destinos />
        </Route>
        <Route path="/Precios">
          <Precios />
        </Route>
        <Route path="/MiViaje">
          <MiViaje />
        </Route>
        <Route path="/CRUD">
          <CRUD />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
