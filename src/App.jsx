import "./App.css";

import { Routes, Route } from "react-router-dom";

import Emojis from "./pages/Emojis";
import Words from "./pages/Words";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emojis" element={<Emojis />} />
        <Route path="/words" element={<Words />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
