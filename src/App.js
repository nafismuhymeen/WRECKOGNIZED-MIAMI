import { Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";

AOS.init();

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
