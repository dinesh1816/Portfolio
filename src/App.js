import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import Footer

const App = () => (
  <Router>
    <Navbar />
    <div style={{ minHeight: '80vh' }}> {/* Ensure content area takes up space */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer /> {/* Render footer within Router */}
  </Router>
);

export default App;
