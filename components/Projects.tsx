
import React, { useState } from 'react';
import { Github, ExternalLink, Folder, BrainCircuit, Code, Figma, Database } from 'lucide-react';

type Category = 'All' | 'AI & ML' | 'Web Development' | 'Figma Design' | 'Database';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: Category;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Cricket Batting Performance Analyzer (FYP)",
    description: "Computer vision-based web application to classify cricket shots, analyze batting quality, and predict outcomes. Uses advanced pose estimation and frame-by-frame analysis to provide real-time insights for players, coaches, and performance analysts. The system evaluates shot quality and classifies shots into distinct categories such as cover drive, straight drive, pull shot, and more.",
    image: "/cricket_batting_analyzer_1767252878062.png",
    tags: ["Computer Vision", "Machine Learning", "Web Development", "Pose Estimation"],
    category: "AI & ML"
  },
  {
    title: "OCR for Urdu Words",
    description: "Built an OCR system for recognizing Urdu text using Convolutional Neural Networks (CNNs), enabling accurate text extraction from images. The system processes Urdu characters with high accuracy and provides confidence scores for each recognized character. Designed to handle various fonts and writing styles.",
    image: "/urdu_ocr_system_1767252895281.png",
    tags: ["Deep Learning", "CNN", "OCR", "Python", "TensorFlow"],
    category: "AI & ML"
  },
  {
    title: "Movie Review Sentiment Analysis",
    description: "Machine learning model that classifies movie reviews as positive or negative using natural language processing techniques. The model analyzes review text and provides sentiment predictions with accuracy metrics. Includes data preprocessing, feature extraction, and model evaluation components.",
    image: "/sentiment_analysis_dashboard_1767252911260.png",
    tags: ["NLP", "Machine Learning", "Python", "Scikit-learn"],
    category: "AI & ML"
  },
  {
    title: "Customer Segmentation",
    description: "Applied clustering algorithms to segment customers based on demographics and spending behavior. The analysis identifies distinct customer groups and provides actionable insights for targeted marketing strategies. Includes comprehensive visualizations of customer segments and their characteristics.",
    image: "/customer_segmentation_viz_1767252927865.png",
    tags: ["Machine Learning", "Clustering", "Data Analysis", "Python"],
    category: "AI & ML"
  },
  {
    title: "Pawsome Pals",
    description: "Animal social media app designed for pet lovers. Built with React.js during Web Development Course, featuring photo sharing, pet profiles, social interactions, and community features. Users can share their pet's moments, connect with other pet owners, and engage with a vibrant pet-loving community.",
    image: "/pawsome_pals_app_1767252945360.png",
    tags: ["React.js", "Web Development", "Social Media", "JavaScript"],
    category: "Web Development"
  },
  {
    title: "AI Garden",
    description: "Created comprehensive UI design in Figma for gardeners, featuring plant care tools, garden planning features, and AI-powered recommendations. The design includes plant identification, watering schedules, garden layout designer, and personalized care tips. Clean, nature-inspired interface with intuitive user experience.",
    image: "/ai_garden_figma_1767252963218.png",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    category: "Figma Design"
  }
];

const categories: Category[] = ['All', 'AI & ML', 'Web Development', 'Figma Design', 'Database'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project =>
    activeCategory === 'All' || project.category === activeCategory
  );

  const handleOpenProject = (project: Project) => setSelectedProject(project);
  const handleCloseProject = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark-text dark:text-light-text">Featured Projects</h2>
          <p className="text-secondary-light-text dark:text-secondary-dark-text max-w-2xl mx-auto">
            A showcase of my technical projects ranging from AI models to full-stack web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary-teal dark:bg-primary-yellow text-white dark:text-black shadow-lg scale-105'
                : 'bg-light-card dark:bg-dark-card text-secondary-light-text dark:text-secondary-dark-text hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleOpenProject(project)}
              className="group bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-teal/50 dark:hover:border-primary-yellow/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left focus:outline-none focus:ring-2 focus:ring-primary-teal dark:focus:ring-primary-yellow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                        title="View Code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
                        title="View Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text dark:text-light-text mb-2 group-hover:text-primary-teal dark:group-hover:text-primary-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary-light-text dark:text-secondary-dark-text text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 py-8"
          onClick={handleCloseProject}
        >
          <div
            className="relative w-full max-w-5xl bg-white dark:bg-[#0f0f0f] rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseProject}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close project details"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden h-full">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
                  {selectedProject.category}
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4 overflow-y-auto">
                <div>
                  <h3 className="text-2xl font-bold text-dark-text dark:text-light-text mb-3">
                    {selectedProject.title}
                  </h3>
                  <div className="max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-secondary-light-text dark:text-secondary-dark-text leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-dark-text dark:text-light-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} /> View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-teal dark:bg-primary-yellow text-white dark:text-black hover:opacity-90 transition-opacity"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
