
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import Avatar from './Avatar';

const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#expertise' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'FAQ', href: '#faq' },
];



const NavLinks: React.FC<{ className?: string; onLinkClick: () => void }> = ({ className, onLinkClick }) => {
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        onLinkClick();
    };
    
    return (
        <nav className={`flex items-center space-x-6 ${className}`}>
            {navLinks.map((link) => (
                <a 
                    key={link.title} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-secondary-light-text dark:text-secondary-dark-text hover:text-dark-text dark:hover:text-light-text transition-colors text-sm font-medium"
                >
                    {link.title}
                </a>
            ))}
        </nav>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        // Default to dark mode for new visitors
        const initialTheme = savedTheme || 'dark';
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    
    const closeMenu = () => setIsMenuOpen(false);
    
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
            <div className="w-full md:container md:mx-auto md:px-4">
                <header className="
                    transition-all duration-300
                    md:mt-3 md:rounded-2xl md:bg-light-bg/5 md:dark:bg-dark-bg/5 md:backdrop-blur-xl md:shadow-lg md:border md:border-gray-200/50 md:dark:border-gray-800/50
                ">
                    <div className="
                        transition-colors duration-300
                        bg-light-bg/5 dark:bg-dark-bg/5 backdrop-blur-xl shadow-sm
                    ">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:px-4">
                        <div className="flex items-center justify-between h-16 sm:h-20">
                            <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="flex items-center space-x-4">
                                <Avatar className="h-10 w-10" />
                                <span className="text-dark-text dark:text-light-text font-bold text-lg">Muhammad Saqib Khan</span>
                            </a>

                            <div className="hidden md:flex items-center space-x-6">
                                <NavLinks onLinkClick={() => {}} />
                                <button onClick={toggleTheme} className="p-2 rounded-full text-secondary-light-text dark:text-secondary-dark-text hover:text-dark-text dark:hover:text-light-text border border-gray-200 dark:border-transparent hover:bg-gray-100 dark:hover:bg-dark-card">
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                                <a href="https://wa.me/923202067666" target="_blank" rel="noopener noreferrer" className="flex items-center bg-primary-teal dark:bg-primary-yellow text-white dark:text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 dark:hover:bg-yellow-400 transition-colors">
                                    <Calendar size={16} className="mr-2" />
                                    Schedule a Call
                                </a>
                            </div>

                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-text dark:text-light-text">
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <NavLinks className="flex-col !space-x-0 space-y-2 items-start" onLinkClick={closeMenu} />
                            <a href="https://wa.me/923202067666" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="w-full flex items-center justify-center bg-primary-teal dark:bg-primary-yellow text-white dark:text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 dark:hover:bg-yellow-400 transition-colors mt-4">
                                <Calendar size={16} className="mr-2" />
                                Schedule a Call
                            </a>
                            <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                                <button onClick={toggleTheme} className="text-secondary-light-text dark:text-secondary-dark-text flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 w-full justify-center">
                                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                                    <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                </header>
            </div>
        </div>
    );
};

export default Header;