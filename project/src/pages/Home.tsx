import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import VisionMap from '../components/VisionMap';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import TrustedBy from '../components/TrustedBy';
import Honours from '../components/Honours';
import Careers from '../components/Careers';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <VisionMap />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <TrustedBy />
      <Honours />
      <Careers />
      <Contact />
    </main>
  );
};

export default Home;