import "./App.css";

import { NavLink, Routes, Route } from "react-router-dom";

import Emojis from "./pages/Emojis";
import Words from "./pages/Words";

function App() {
  return (
    <>
      <Routes>
        <Route path="/emojis" element={<Emojis />} />
        <Route path="/words" element={<Words />} />
      </Routes>
      <div className="App">
        <h1>Artistaid</h1>
        <h3>Do you feel stuck in a rut with that project of yours?</h3>
        <h4>Artistaid is here to help.</h4>
        <h5>What do you need?</h5>
        <NavLink to="/">
          <button>Words</button>
        </NavLink>
        <NavLink to="/">
          <button>Emojis</button>
        </NavLink>
      </div>
    </>
  );
}

export default App;
