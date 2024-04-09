import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Qualities from "./components/qualities/Qualities";
import Features from "./components/features/Features";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Map from "./components/Map/Map"
import Carrousel from "./components/carrousel/Carrousel"

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-NGX48X27' // Substitua pelo seu ID de contêiner do Google Tag Manager
  };

  // Inicialize o Google Tag Manager
  TagManager.initialize(tagManagerArgs);

  return (
    <div className="App">
      <Header />
      <Services />
      <Carrousel />
      <About />
      <Qualities />
      <Features />
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
