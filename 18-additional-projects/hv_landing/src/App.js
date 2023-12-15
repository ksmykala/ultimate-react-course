// App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
// import HowItWorksSection from './components/HowItWorksSection';
// import BenefitsSection from './components/BenefitsSection';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <HowItWorksSection />
      <BenefitsSection />
      <Footer /> */}
    </div>
  );
}

export default App;
