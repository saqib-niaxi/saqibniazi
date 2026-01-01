import React, { useState } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

type ExperienceItem = {
    company: string;
    location: string;
    role: string;
    duration: string;
    description: string[];
    tags: string[];
    category: 'All' | 'AI & ML' | 'Web Development';
    url: string;
};

const experiences: ExperienceItem[] = [
    {
        company: "Presidential Initiative for AI & Computing (PIAIC) - Panaversity",
        location: "Islamabad, Pakistan (Onsite)",
        role: "Certified Agentic and Robotic AI Engineer (CAE) - Student",
        duration: "Jan 2026 - Present",
        description: [
            "Currently enrolled in Quarter 1 (Batch 83) of the Certified Agentic and Robotic AI Engineer program.",
            "Learning to build and monetize Digital FTEs (Full-Time Employees) using AI agents and agentic systems.",
            "Gaining hands-on experience with AI-native development, agent orchestration, and building sellable AI products.",
            "Studying the nine pillars of AI-native development including specifications, agent frameworks, and deployment strategies."
        ],
        tags: ["Agentic AI", "AI Agents", "Digital FTEs", "AI-Native Development", "Panaversity", "PIAIC"],
        category: "AI & ML",
        url: "https://agentfactory.panaversity.org/",
    },
    {
        company: "ASAPP Studio",
        location: "Lahore, Pakistan",
        role: "AI Software Developer",
        duration: "Aug 2023 - Present",
        description: [
            "Build and deploy real-world AI applications with a focus on NLP and end-to-end ML pipelines.",
            "Design, train, and evaluate models; optimize for latency, reliability, and cost.",
            "Collaborate cross-functionally to integrate AI/ML solutions into production systems."
        ],
        tags: ["NLP", "Python", "TensorFlow", "Scikit-learn", "Docker", "GCP", "ML Pipelines"],
        category: "AI & ML",
        url: "https://www.linkedin.com/company/asapp-studio/",
    },
    {
        company: "DevelopersHub.co",
        location: "Islamabad, Pakistan",
        role: "AI & ML Intern",
        duration: "Apr 2023 - May 2023",
        description: [
            "Completed a 6-week Virtual Internship in AI and ML, contributing to real-world projects.",
            "Gained hands-on experience in AI development, problem-solving, and model deployment."
        ],
        tags: ["AI", "Machine Learning", "Python", "Model Deployment"],
        category: "AI & ML",
        url: "https://www.linkedin.com/company/developershub-co/"
    },
    {
        company: "Presidential Initiative for AI & Computing (PIAIC)",
        location: "Online",
        role: "Certified AI Developer (Training & Projects)",
        duration: "Apr 2022 - Apr 2024",
        description: [
            "Completed an intensive, project-based training program covering foundational and advanced AI concepts.",
            "Developed and deployed deep learning models for computer vision and NLP tasks.",
            "Gained practical experience with TensorFlow, Keras, and Python's data science stack."
        ],
        tags: ["AI", "Deep Learning", "Computer Vision", "TensorFlow", "PIAIC"],
        category: "AI & ML",
        url: "https://www.piaic.org/"
    },
    {
        company: "BMA Solutions",
        location: "Mianwali, Pakistan",
        role: "Software Programmer Intern",
        duration: "Jul 2022 - Sep 2022",
        description: [
            "Worked on real-world software development tasks under Namal University's industry training program.",
            "Demonstrated strong work ethic, punctuality, and commitment in software projects."
        ],
        tags: ["Software Development", "Teamwork", "Agile"],
        category: "Web Development",
        url: ""
    },
];

const filters: ExperienceItem['category'][] = ['All', 'AI & ML', 'Web Development'];

const Experience: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ExperienceItem['category']>('All');

    const filteredExperiences = experiences.filter(exp =>
        activeFilter === 'All' || exp.category === activeFilter
    );

    return (
        <section id="experience" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-4">Work Experience</h2>
            <p className="text-center text-secondary-light-text dark:text-secondary-dark-text mb-12">My professional journey and the roles I've held throughout my career.</p>

            <div className="flex justify-center flex-wrap gap-2 mb-12">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                                ? 'bg-primary-teal dark:bg-primary-yellow text-white dark:text-black'
                                : 'bg-light-card dark:bg-dark-card text-secondary-light-text dark:text-secondary-dark-text hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="relative pl-4 sm:pl-6">
                {/* Timeline line */}
                <div className="absolute left-7 sm:left-9 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

                {filteredExperiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 sm:pl-10 pb-16">
                        {/* Timeline dot */}
                        <div className="absolute left-4 sm:left-6 top-2.5 h-6 w-6 rounded-full bg-light-card dark:bg-dark-card border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary-teal dark:bg-primary-yellow"></div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-12 h-12 rounded-lg bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800 flex items-center justify-center mt-1 shrink-0">
                                <Briefcase className="w-6 h-6 text-primary-teal dark:text-primary-yellow" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start flex-wrap gap-y-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-text dark:text-light-text">{exp.company}</h3>
                                        <p className="text-secondary-light-text dark:text-secondary-dark-text text-sm">{exp.location}</p>
                                    </div>
                                    {exp.url && (
                                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm border border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors shrink-0">
                                            Visit {exp.company} <ExternalLink size={14} className="ml-2" />
                                        </a>

                                    )}
                                </div>

                                <h4 className="text-lg font-semibold text-dark-text dark:text-light-text mt-4">{exp.role}</h4>
                                <p className="text-sm text-secondary-light-text dark:text-secondary-dark-text mb-4">{exp.duration}</p>
                                <ul className="list-disc pl-5 space-y-2 text-secondary-light-text dark:text-secondary-dark-text leading-relaxed">
                                    {exp.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="bg-teal-100 dark:bg-yellow-900/50 text-teal-800 dark:text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;