import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import FichePlante from './components/FichePlante';
import Recettes from './components/Recettes';
import AfficherRecettes from './components/AfficherRecettes';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Plantes et Potager</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/fiche/:nom" element={<FichePlante />} />
        <Route path="/recettes" element={<AfficherRecettes />} />
        <Route path="/recettes/:plante" element={<Recettes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;