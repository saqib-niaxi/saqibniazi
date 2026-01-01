import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="text-center py-20 md:py-32">
      <div className="inline-flex items-center bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-sm text-secondary-light-text dark:text-secondary-dark-text mb-6">
        Available for New Opportunities
        <ArrowRight size={16} className="ml-2" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-dark-text dark:text-light-text leading-tight">
        AI 
       
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> Software Developer</span>
      </h1>
      <p className="max-w-2xl mx-auto text-secondary-light-text dark:text-secondary-dark-text text-lg md:text-xl mt-6">
        I build intelligent applications and scalable web solutions with a focus on NLP, end-to-end ML pipelines, and user-centric design.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#expertise" className="w-full sm:w-auto bg-primary-teal dark:bg-primary-yellow text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 dark:hover:bg-yellow-400 transition-colors">
          View my Services
        </a>
        <a href="https://wa.me/923202067666" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent border border-primary-teal dark:border-gray-700 text-primary-teal dark:text-light-text px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 dark:hover:bg-dark-card transition-colors">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;