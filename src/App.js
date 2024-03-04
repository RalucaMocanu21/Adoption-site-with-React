import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/Aboutus';
import ContactUs from './components/ContactUs';
import AdoptiiCaini from './components/AdoptiiCaini';
import AdoptiiPisici from './components/AdoptiiPisici';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/adoptii-caini" element={<AdoptiiCaini />} /> 
        <Route path="/adoptii-pisici" element={<AdoptiiPisici />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
