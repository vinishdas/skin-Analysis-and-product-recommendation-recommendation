import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navebar";
import Home from "./components/Home";
import Analysis from "./components/Analysis";
import About from "./components/About";

const App = () => {
  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
