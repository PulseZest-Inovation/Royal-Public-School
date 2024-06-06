import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import AdmissionPage from "./pages/AdmissionForm/admission";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{ backgroundColor: "#FFFFFF" }}>
      <Router>
        <Header />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<AdmissionPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
