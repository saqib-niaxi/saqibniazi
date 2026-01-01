import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
import Avatar from './Avatar';

const footerLinks = {
  "Contact": [
    { name: "WhatsApp", href: "https://wa.me/923202067666" },
    { name: "Email", href: "mailto:niazisaqib991@gmail.com" },
  ],
};

const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/saqib-niazi/" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "https://github.com/saqib-niaxi" },
];

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-2">
                         <div className="flex items-center space-x-4 mb-4">
                            <Avatar className="h-10 w-10" />
                            <span className="text-dark-text dark:text-light-text font-bold text-xl">Muhammad Saqib Khan</span>
                        </div>
                        <p className="text-secondary-light-text dark:text-secondary-dark-text text-sm mb-4">AI Software Developer with experience in NLP, Computer Vision, and full-stack web development.</p>
                        <div className="space-y-2 text-sm">
                            <a href="mailto:niazisaqib991@gmail.com" className="flex items-center text-secondary-light-text dark:text-secondary-dark-text hover:text-dark-text dark:hover:text-light-text transition-colors">
                                <Mail size={16} className="mr-3" />
                                niazisaqib991@gmail.com
                            </a>
                             <p className="flex items-center text-secondary-light-text dark:text-secondary-dark-text">
                                <MapPin size={16} className="mr-3" />
                                Islamabad, Pakistan
                            </p>
                        </div>
                    </div>
                    
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="lg:col-start-4">
                            <h4 className="font-semibold text-dark-text dark:text-light-text mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-secondary-light-text dark:text-secondary-dark-text hover:text-dark-text dark:hover:text-light-text hover:underline text-sm transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                         <span className="text-secondary-light-text dark:text-secondary-dark-text text-sm mr-4">Follow me:</span>
                         {socialLinks.map((link, index) => (
                             <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-secondary-light-text dark:text-secondary-dark-text hover:text-dark-text dark:hover:text-light-text transition-colors">
                                 {link.icon}
                             </a>
                         ))}
                    </div>
                    <p className="text-secondary-light-text dark:text-secondary-dark-text text-sm">&copy; {new Date().getFullYear()} Muhammad Saqib Khan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;