
import React from 'react';

const stats = [
  { value: '1+', label: 'Years of Experience' },
  { value: '10+', label: 'Happy Clients' },
  { value: '95%', label: 'Success Rate' },
  { value: '15+', label: 'Projects Completed' },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl md:text-5xl font-bold text-light-text">{stat.value}</p>
            <p className="text-secondary-text mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
