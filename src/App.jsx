import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Offers from './components/Offers';
import Facilities from './components/Facilities';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <VideoSection />
      <Offers />
      <Facilities />
      <Footer />
    </div>
  );
}

export default App;
