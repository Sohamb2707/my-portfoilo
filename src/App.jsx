import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
