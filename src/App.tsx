import React from 'react';
import Header from './components/HeaderComponents/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/HeaderComponents/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter><Navbar/>
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/home" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
   </BrowserRouter> 
   </>
  );
}

export default App;
