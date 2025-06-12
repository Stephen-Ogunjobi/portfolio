import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    projects: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        { id: "title", ref: document.getElementById("projects-title") },
        { id: "projects", ref: document.getElementById("projects-grid") },
      ];

      elements.forEach(({ id, ref }) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          setIsVisible((prev) => ({ ...prev, [id]: isVisible }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "FinezCV",
      subtitle: "AI Powered Resume Builder",
      description:
        "A web app builder that allows you to create a professional resume/CV and cover letter in minutes. It uses AI to generate a resume based on your skills and experience.",
      image: "finez-tab-mockup.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "react-hook-form",
        "Next",
        "RTK Query",
      ],
      liveUrl: "https://finezcv.com",
      githubUrl: "https://github.com/Stephen-Ogunjobi",
    },
    {
      id: 2,
      title: "Plated",
      subtitle: "Recipe and Meals Finder",
      description:
        "Users can filter meals by region or browse by category, search by name or ingredients and view view detailed cooking instructions with recipe list",
      image: "plated-macwhite-mockup.jpg",
      technologies: [
        "React",
        "JavaScript",
        "React-Router",
        "React-Toolkit",
        "Thunks",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "ExamPro",
      subtitle: "Exam Management System",
      description:
        "Intelligent exam management platform with AI-powered question generation, automated grading, and comprehensive analytics.",
      image: "examPrep-mockup.png",
      technologies: ["React", "AI/ML", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          id="projects-title"
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible.title
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A selection of projects I've worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div id="projects-grid" className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 transform ${
                isVisible.projects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-400">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
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
