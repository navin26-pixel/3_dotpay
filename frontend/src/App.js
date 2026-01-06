import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoShowcaseSection from "./components/VideoShowcaseSection";
import HowItWorksSection from "./components/HowItWorksSection";
import NetworksMarquee from "./components/NetworksMarquee";
import RateComparisonSection from "./components/RateComparisonSection";
import SecuritySection from "./components/SecuritySection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoShowcaseSection />
      <HowItWorksSection />
      <NetworksMarquee />
      <RateComparisonSection />
      <SecuritySection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
