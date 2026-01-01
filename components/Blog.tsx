
import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
    {
        title: "11 Best Shadcn React Libraries (Plus 1 Bonus)",
        description: "A developer's guide to the best Shadcn-compatible React libraries and UI kits—we'll do well, trade-offs, ratings, and when to use each.",
        image: "https://picsum.photos/seed/blog1/600/400",
        date: "October 7, 2025"
    },
    {
        title: "Why Next.js is the Future of React Development",
        description: "Discover the powerful features of Next.js, including server-side rendering, static site generation, and API routes that make it a top choice.",
        image: "https://picsum.photos/seed/blog2/600/400",
        date: "September 30, 2025"
    },
    {
        title: "Mastering State Management with Redux Toolkit",
        description: "An honest review of modern state management in React. Learn the pros, cons, and practical insights from using Redux Toolkit in large-scale apps.",
        image: "https://picsum.photos/seed/blog3/600/400",
        date: "September 23, 2025"
    }
];

const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-20">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-4xl font-bold">Recent Blog Posts</h2>
                    <p className="text-secondary-text mt-2">Latest insights on software engineering and technology</p>
                </div>
                <a href="#" className="hidden sm:inline-flex items-center bg-transparent border border-gray-700 text-light-text px-5 py-2.5 rounded-lg font-semibold hover:bg-dark-card transition-colors text-sm">
                    View all posts <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div key={index} className="bg-dark-card border border-gray-800 rounded-2xl overflow-hidden group">
                        <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-light-text mb-3">{post.title}</h3>
                            <p className="text-secondary-text text-sm mb-4">{post.description}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12 sm:hidden">
                <a href="#" className="inline-flex items-center bg-transparent border border-gray-700 text-light-text px-6 py-3 rounded-lg font-semibold hover:bg-dark-card transition-colors">
                    View all posts <ArrowRight size={16} className="ml-2" />
                </a>
            </div>
        </section>
    );
};

export default Blog;
