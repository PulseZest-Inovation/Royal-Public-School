import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdmissionPage from "./pages/AdmissionForm/admission";
import Home from './pages/Home';
import Founder from "./pages/Profile/founder";
import President from "./pages/Profile/president";
import Principle from './pages/Profile/principle';
import VicePrinciple from "./pages/Profile/vicepresident";
import VicePresident from "./pages/Profile/viceprinciple";
import AboutUs from './pages/aboutUs/aboutUs';
import Career from './pages/career/career';
import Contact from './pages/contact/contact';


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
            <Route path="/career" element={<Career />} />
            <Route path="/admission" element={<AdmissionPage />} />

            <Route path="/vice-president" element={<VicePrinciple />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/vice-principle" element={<VicePresident />} />
            <Route path="/principle" element={<Principle />} />
            <Route path="/president" element={<President />} />


          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
