import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Footer />
              </>
            }
          />
          {/* Register route with optional step parameter */}
          <Route path="/register/:step?" element={<RegistrationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
