
import React from 'react';
import { CheckCircle } from 'lucide-react';



const specializations = [
  "AI & Machine Learning",
  "Natural Language Processing (NLP)",
  "Deep Learning (CNNs, RNNs)",
  "Computer Vision",
  "Python (NumPy, Pandas, Scikit-learn)",
  "TensorFlow & Keras",
  "Full-Stack Web Development",
  "React.js",
  "Node.js & Python (Flask)",
  "API Development & Integration",
  "Git & GitHub",
  "Docker & GCP Deployment"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">About Me</h2>
      <p className="text-center text-secondary-light-text dark:text-secondary-dark-text mb-12">A little bit about my background and skills.</p>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 w-full flex justify-center">
          <img 
            src="/profile.png" 
            alt="Muhammad Saqib Khan" 
            className="rounded-2xl object-cover w-full max-w-sm h-[500px] shadow-2xl border-4 border-white dark:border-gray-800" 
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Hi, I'm Muhammad Saqib Khan — <span className="text-primary-teal dark:text-primary-yellow">AI Software Developer</span>
          </h3>
          <p className="text-secondary-light-text dark:text-secondary-dark-text mb-6 leading-relaxed">
            Software Developer with hands-on experience in HTML, CSS, Bootstrap, and modern JavaScript (ES6+). Familiar with React.js, API integration, and Git version control, with strong problem-solving skills and attention to detail. Enthusiastic learner, eager to contribute to innovative projects while growing in a collaborative team environment. My interest lies in Software Development & Research in AI for Real-world Applications.
          </p>
          <h4 className="text-xl font-semibold mb-4">I specialize in:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {specializations.map((spec, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-secondary-light-text dark:text-secondary-dark-text">{spec}</span>
              </li>
            ))}
          </ul>
           <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#expertise" className="flex-1 sm:flex-none text-center bg-primary-teal dark:bg-primary-yellow text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 dark:hover:bg-yellow-400 transition-colors">
              View Services
            </a>
            <a href="https://wa.me/923202067666" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center bg-transparent border border-primary-teal dark:border-gray-700 text-primary-teal dark:text-light-text px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 dark:hover:bg-dark-card transition-colors">
              Hire Now
            </a>
            <a href="https://github.com/saqib-niaxi" target="_blank" rel="noopener noreferrer" className="text-secondary-light-text dark:text-secondary-dark-text hover:text-dark-text dark:hover:text-light-text font-semibold sm:ml-2">
                View Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
