import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
