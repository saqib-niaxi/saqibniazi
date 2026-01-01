import React from 'react';
import { Laptop } from 'lucide-react';

const technologies = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
];

const TechIcon: React.FC<{ tech: { name: string; icon: string } }> = ({ tech }) => (
    <div className="relative group/tech flex-shrink-0">
        <div className="bg-light-card dark:bg-dark-card p-3 sm:p-4 rounded-xl border border-gray-200 dark:border-gray-800 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover/tech:scale-105">
            <img src={tech.icon} alt={tech.name} className="h-8 w-8 sm:h-10 sm:w-10 object-contain p-1" />
        </div>
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-900 dark:bg-black text-white text-xs rounded-md opacity-0 scale-95 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-200 pointer-events-none z-10">
            {tech.name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-black rotate-45"></div>
        </div>
    </div>
);


const Expertise: React.FC = () => {
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section id="expertise" className="py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Expertise Across <br />
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Modern Technologies</span> & Frameworks
      </h2>
      <div className="flex justify-center items-center text-center gap-2 text-secondary-light-text dark:text-secondary-dark-text mb-12">
        <Laptop size={20} />
        <p>Building scalable solutions with cutting-edge tools.</p>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-8">
            <div className="flex space-x-4 sm:space-x-6 animate-loop-scroll">
              {duplicatedTechnologies.map((tech, index) => (
                <TechIcon key={index} tech={tech} />
              ))}
            </div>
        </div>
      </div>
       <style>{`
        @keyframes loop-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
            animation: loop-scroll 40s linear infinite;
            display: flex;
        }
        .group:hover .animate-loop-scroll {
            animation-play-state: paused;
        }
        `}</style>
    </section>
  );
};

export default Expertise;