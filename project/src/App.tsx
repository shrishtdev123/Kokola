import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Benefits />
              <Footer />
            </>
          } />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;