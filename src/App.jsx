import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Apps from "./pages/Apps";
import Resume from "./pages/Resume";
import Education from "./pages/Education";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/apps" element={<Apps />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
