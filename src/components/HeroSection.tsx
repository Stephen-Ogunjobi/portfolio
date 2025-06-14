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
      url: "https://github.com/stephen-ogunjobi",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/stephen-ogunjobi-466ab0312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:stephenogunjobi400@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com/@successful.codes",
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
    <div
      id="home"
      className="min-h-[90vh] lg:min-h-screen overflow-hidden relative"
    >
      {/* Thunder Strike Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
          {/* Thunder Strike Path */}
          <path
            d="M950,80 L930,150 L970,170 L940,240 L980,260 L950,330"
            stroke="url(#thunderGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            className={`transition-all duration-400 ${
              isLoaded ? "animate-thunder-strike" : ""
            }`}
            style={{
              strokeDasharray: "300",
              strokeDashoffset: isLoaded ? "0" : "300",
              animationDelay: "3.5s",
            }}
          />

          {/* Thunder Glow Effect */}
          <circle
            cx="950"
            cy="330"
            r="15"
            fill="url(#thunderGlow2)"
            opacity="0"
            className={`${isLoaded ? "animate-thunder-glow" : ""}`}
            style={{ animationDelay: "4.2s" }}
          />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient
              id="thunderGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="thunderGradient2"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id="thunderGlow">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="thunderGlow2">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle Snowfall Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full animate-snowfall transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              animationTimingFunction: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-12 py-8 lg:py-24">
        <div className="lg:hidden w-full max-w-md mx-auto space-y-8">
          <p
            className={`text-gray-400 text-xl font-inter transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Hi, I'm Stephen
          </p>

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

          <p
            className={`text-gray-400 text-lg leading-relaxed font-inter transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Transforming ideas into functional, user friendly and seamless
            digital experiences with modern frontend tools and AI integration
          </p>

          <div
            className={`flex justify-center gap-6 transition-all duration-1000 mb-7 ${
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

        <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center justify-between gap-16 mt-4">
          <div className="flex-1 space-y-8">
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
