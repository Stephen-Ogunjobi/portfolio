import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll(".project-item");
      const newVisibleProjects: number[] = [];

      projectElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          newVisibleProjects.push(index);
        }
      });

      setVisibleProjects(newVisibleProjects);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "ExamPrep",
      subtitle: "Exam  and Study Management System",
      description:
        "A web app that contains everything needed to get student ready for both online and offline exams, with AI assistant for better understanding",
      image: "examPrep-mockup.png",
      technologies: [
        "React",
        "Next",
        "Typescript",
        "Supabase",
        "Tailwind CSS",
        "AI-Chatbot",
      ],
      liveUrl: "https://aiprep.ng/",
      githubUrl: "https://github.com/Stephen-Ogunjobi",
    },
    {
      id: 2,
      title: "FinezCV",
      subtitle: "AI Powered Resume and cover letter Builder",
      description:
        "A web app  that allows you to create a professional resume/CV and cover letter in minutes. It uses AI to generate a resume based on your skills and experience.",
      image: "finez-tab-mockup.jpg",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI-Integration",
        "React-hook-form",
        "RTK Query",
        "Stripe",
        "HTML",
        "CSS",
      ],
      liveUrl: "https://finezcv.com",
      githubUrl: "https://github.com/Stephen-Ogunjobi",
    },
    {
      id: 3,
      title: "Spree",
      subtitle: "Income tracker and manager",
      description:
        "Landing page website for a startup that allows users get familiar with the product and download the app",
      image: "spree-mockup.jpg",
      technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Vue-icons"],
      liveUrl: "https://paywave.tech",
      githubUrl: "https://github.com/Stephen-Ogunjobi",
    },
    {
      id: 4,
      title: "GlowCart",
      subtitle: "E-commerce Skin care store",
      description:
        "A web app that allows users to browse and purchase skin care products",
      image: "glowcart-mockup.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Zustand",
        "React-hook-form",
        "Tailwind CSS",
        "Zod",
        "Supabase",
      ],
      liveUrl: "https://glowcart-pi.vercel.app/",
      githubUrl: "https://github.com/Stephen-Ogunjobi/GlowCart",
    },
    {
      id: 5,
      title: "GlowCart-Admin",
      subtitle: "Admin Dasboard for GlowCart",
      description:
        "A comprehensive E-commerce admin dashboard, that allows store administrator to manage products, handle orders, manage users and content, view analytics and inventory.",
      image: "glowcart-admin-mockup.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "React-hook-form",
        "Zod",
        "React-markdown",
        "Slugify",
      ],
      liveUrl: "https://glowcart-admin-x89n.vercel.app/admin/home",
      githubUrl: "https://github.com/Stephen-Ogunjobi/GlowCart",
    },

    {
      id: 6,
      title: "Plated",
      subtitle: "Recipe and Meals Finder",
      description:
        "Users can filter meals by region or browse by category, search by name or ingredients and view  detailed cooking instructions with recipe list",
      image: "plated-macwhite-mockup.jpg",
      technologies: [
        "React",
        "JavaScript",
        "React-Router",
        "React-Toolkit",
        "Thunks",
        "Tailwind CSS",
      ],
      liveUrl: "https://plated-two.vercel.app/",
      githubUrl: "https://github.com/Stephen-Ogunjobi/Plated",
    },
    {
      id: 7,
      title: "TripMate",
      subtitle: "Travel Planner",
      description:
        "A web app that allows users to plan their trips and get recommendations for activities, restaurants, and hotels",
      image: "tripmate--mockup.jpg",
      technologies: [
        "React",
        "JavaScript",
        "React-query",
        "React-router",
        "React-hook-form",
        "React-toastify",

        "Tailwind CSS",
      ],
      liveUrl: "https://tripmate-e24v.vercel.app/",
      githubUrl: "https://github.com/Stephen-Ogunjobi/TripMate",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 font-poppins bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A selection of projects I've worked on recently
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-item transition-all duration-1000 transform ${
                visibleProjects.includes(index)
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-12"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                    {/* Gradient border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/2] overflow-hidden rounded-2xl bg-gray-900/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                  </div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-white/95 backdrop-blur-md rounded-xl hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-white/95 backdrop-blur-md rounded-xl hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </a>
                  </div>

                  {/* Project number indicator */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 font-bold text-sm sm:text-base border border-white/20 shadow-lg">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`space-y-4 sm:space-y-6 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-gray-200 rounded-full text-xs sm:text-sm font-medium border border-white/5 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm text-gray-200 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm text-gray-200 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
