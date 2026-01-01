
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  { platform: "Upwork", author: "Emily Rodriguez", avatarInitial: "ER", text: "Saqib's UI/UX skills are top-notch. He transformed our outdated website into a modern, user-friendly experience." },
  { platform: "LinkedIn", author: "David Kim", avatarInitial: "DK", text: "Professional, reliable, and delivers quality work on time. Highly recommend for any web development project." },
  { platform: "Fiverr", author: "Michael Chen", avatarInitial: "MC", text: "Outstanding React developer! Built our entire frontend from scratch with beautiful animations and perfect responsiveness." },
  { platform: "Fiverr", author: "Lisa Thompson", avatarInitial: "LT", text: "Amazing work on our mobile app! The performance optimizations and smooth animations exceeded our expectations." },
  { platform: "Upwork", author: "Alex Parker", avatarInitial: "AP", text: "Saqib's full-stack expertise saved us time and money. He handled both frontend and backend perfectly." },
  { platform: "Google", author: "Maria Garcia", avatarInitial: "MG", text: "Incredible attention to detail and great communication throughout the project. Will definitely work with him again!" },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-4">What Clients Say</h2>
            <p className="text-center text-secondary-text mb-12">Don't just take my word for it. Here's what my clients have to say about working with me.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-dark-card border border-gray-800 p-6 rounded-2xl flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-secondary-text">{testimonial.platform}</span>
                            <div className="flex text-primary-yellow">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                        </div>
                        <p className="text-secondary-text flex-grow mb-6">"{testimonial.text}"</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white mr-3">
                                {testimonial.avatarInitial}
                            </div>
                            <span className="font-semibold text-light-text">{testimonial.author}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center bg-transparent border border-gray-700 text-light-text px-6 py-3 rounded-lg font-semibold hover:bg-dark-card transition-colors">
                    View All Testimonials <ArrowRight size={16} className="ml-2" />
                </a>
            </div>
        </section>
    );
};

export default Testimonials;
