import React, { useState } from 'react';
import { ChevronDown, Code, Smartphone, BrainCircuit, Lightbulb, Cloud, Users } from 'lucide-react';

const faqData = [
    { 
        question: "Do you develop as web applications?",
        answer: "Yes, absolutely! While my core expertise is in AI and ML, I am also a skilled web developer proficient with the MERN stacks.",
        icon: <Smartphone size={20} />
    },
    { 
        question: "Can you build AI-powered chatbots and automation systems?",
        answer: "Yes. I have experience in building and deploying real-world AI applications with a focus on NLP, which is the foundational technology for modern chatbots and automation systems.",
        icon: <BrainCircuit size={20} />
    },
    { 
        question: "Can you tell me more about your projects like the Cricket Batting Analyzer?",
        answer: "Certainly. My Final Year Project, the Cricket Batting Performance Analyzer, is a computer vision-based web app. It uses deep learning models to classify cricket shots, analyze their quality, and predict outcomes, showcasing my skills in applying AI to real-world problems.",
        icon: <Lightbulb size={20} />
    },
    { 
        question: "Which cloud platforms and databases do you work with?",
        answer: "I'm proficient with databases like SQL. For deployment, I have hands-on experience with cloud platforms like Google Cloud Platform (GCP) and containerization using Docker, ensuring scalable and reliable applications.",
        icon: <Cloud size={20} />
    },
     { 
        question: "Do you offer remote services?",
        answer: "Tes, I'm available for remote services.And also available for on-site services as well",
        icon: <Users size={20} />
    },
];

const FaqItem: React.FC<{ faq: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6 gap-4">
                <span className="flex items-center font-semibold text-base">
                    <span className="text-secondary-light-text dark:text-secondary-dark-text mr-4">{faq.icon}</span>
                    {faq.question}
                </span>
                <ChevronDown size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex-shrink-0 text-secondary-light-text dark:text-secondary-dark-text`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-secondary-light-text dark:text-secondary-dark-text pb-6 pl-9 pr-2">{faq.answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-secondary-light-text dark:text-secondary-dark-text mt-4">
                        Can't find what you're looking for? Feel free to{' '}
                        <a href="https://wa.me/923202067666" target="_blank" rel="noopener noreferrer" className="text-primary-teal dark:text-primary-yellow font-semibold underline">contact me directly</a>.
                    </p>
                </div>
                <div className="lg:w-2/3">
                    {faqData.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            faq={faq}
                            isOpen={openIndex === index} 
                            onClick={() => handleToggle(index)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;