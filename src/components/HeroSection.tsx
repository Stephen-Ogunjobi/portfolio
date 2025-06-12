import {
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiSupabase,
  SiGnubash,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-400",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com/@yourusername",
      color: "hover:text-pink-400",
    },
  ];

  const techStack = [
    { name: "Vue", icon: SiVuedotjs, color: "text-green-500" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
    { name: "Bash", icon: SiGnubash, color: "text-gray-300" },
  ];

  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="min-h-screen  overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-12 py-12 lg:py-24">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden w-full max-w-md mx-auto space-y-8">
          {/* Greeting */}
          <p
            className={`text-gray-400 text-xl font-inter transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Hi, I'm Stephen
          </p>

          {/* Main Title */}
          <h1
            className={`text-5xl font-bold font-poppins bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Frontend
            <br />
            Developer
          </h1>

          {/* Description */}
          <p
            className={`text-gray-400 text-lg leading-relaxed font-inter transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Transforming ideas into functional, user friendly and seamless
            digital experiences with modern frontend tools and AI integration
          </p>

          {/* Social Media Icons */}
          <div
            className={`flex justify-center gap-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.color} transition-all duration-300 transform hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-current/20 p-2 rounded-full`}
                  aria-label={social.name}
                >
                  <IconComponent className="w-8 h-8" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center justify-between gap-16 mt-4">
          {/* Left Column - Greeting, Title, Social Links */}
          <div className="flex-1 space-y-8">
            {/* Greeting */}
            <p
              className={`text-gray-400 text-2xl font-inter transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Hi, I'm Stephen
            </p>

            {/* Main Title */}
            <h1
              className={`text-6xl xl:text-7xl font-bold font-poppins bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight transition-all duration-1200 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Frontend
              <br />
              Developer
            </h1>

            {/* Social Media Icons */}
            <div
              className={`flex gap-6 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 ${social.color} transition-all duration-300 transform hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-current/20 p-3 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="flex-1 flex items-center">
            <p
              className={`text-gray-400 text-xl xl:text-2xl leading-relaxed font-inter max-w-lg transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Transforming ideas into functional, user friendly and seamless
              digital experiences with modern frontend tools and AI integration
            </p>
          </div>
        </div>
      </div>

      {/* Moving Tech Stack - Full Width Bottom Section */}
      <div
        className={`relative z-10 transition-all duration-1200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-gray-900/30 to-transparent py-2">
          <div className="flex animate-scroll-left space-x-8 lg:space-x-10">
            {duplicatedTechStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className={`flex flex-col items-center justify-center min-w-fit group flex-shrink-0 transition-all duration-500 ${
                    isLoaded ? "animate-pulse" : ""
                  }`}
                  style={{
                    animationDelay: `${
                      1200 + (index % techStack.length) * 100
                    }ms`,
                    animationDuration: "2s",
                    animationIterationCount: 1,
                  }}
                >
                  <div
                    className={`${tech.color} opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105`}
                  >
                    <IconComponent className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <span className="text-gray-600 text-xs mt-1.5 font-poppins whitespace-nowrap opacity-60">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
