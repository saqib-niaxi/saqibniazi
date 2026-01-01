
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;