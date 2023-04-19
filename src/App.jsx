import "./index.css";

import { Routes, Route } from "react-router-dom";

import Emojis from "./pages/Emojis";
import Words from "./pages/Words";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
