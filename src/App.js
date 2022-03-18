import { Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import Gallery from "./pages/Gallery";
import Quiz from "./pages/Quiz";

AOS.init();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
