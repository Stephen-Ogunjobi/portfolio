import { useEffect, useState } from "react";
import { Code, Settings, Bot } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState({
    paragraph1: false,
    paragraph2: false,
    grid: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        { id: "paragraph1", ref: document.getElementById("paragraph1") },
        { id: "paragraph2", ref: document.getElementById("paragraph2") },
        { id: "grid", ref: document.getElementById("grid") },
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
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutItems = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern frameworks and cutting-edge technologies.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Integration",
      description:
        "Architecting robust backend solutions and seamless API integrations for scalable applications.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Integration",
      description:
        "Implementing intelligent AI-powered features and chatbots to revolutionize user experiences.",
      icon: Bot,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen py-10  px-6 lg:px-12 relative overflow-hidden">
      {/* Animated Background SVG Paths */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Decorative animated path 1 */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className={`transition-all duration-2000 ${
              isVisible.paragraph1 ? "animate-draw-path" : ""
            }`}
            style={{
              strokeDasharray: "1000",
              strokeDashoffset: isVisible.paragraph1 ? "0" : "1000",
            }}
          />

          {/* Decorative animated path 2 */}
          <path
            d="M0,600 Q400,300 800,500 T1200,200"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            className={`transition-all duration-2500 ${
              isVisible.paragraph2 ? "animate-draw-path" : ""
            }`}
            style={{
              strokeDasharray: "1200",
              strokeDashoffset: isVisible.paragraph2 ? "0" : "1200",
              transitionDelay: "300ms",
            }}
          />

          {/* Connecting grid paths */}
          <g
            className={`transition-all duration-1500 ${
              isVisible.grid ? "opacity-100" : "opacity-0"
            }`}
          >
            <path
              d="M300,700 Q600,650 900,700"
              stroke="url(#gradient3)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              style={{
                strokeDasharray: "600",
                strokeDashoffset: isVisible.grid ? "0" : "600",
                transitionDelay: "800ms",
              }}
            />
          </g>

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float transition-all duration-1000 ${
              isVisible.grid ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 500}ms`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

          {/* Animated underline SVG */}
          <div className="relative">
            <svg
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              width="200"
              height="20"
              viewBox="0 0 200 20"
            >
              <path
                d="M10,15 Q100,5 190,15"
                stroke="url(#underlineGradient)"
                strokeWidth="2"
                fill="none"
                className={`transition-all duration-1500 ${
                  isVisible.paragraph1 ? "" : ""
                }`}
                style={{
                  strokeDasharray: "200",
                  strokeDashoffset: isVisible.paragraph1 ? "0" : "200",
                }}
              />
              <defs>
                <linearGradient
                  id="underlineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p
            id="paragraph1"
            className={`text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible.paragraph1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            I'm a frontend developer with over a year of experience building
            modern web applications using React, TypeScript, Tailwind, Next.js,
            and Supabase. I enjoy creating seamless user experiences and working
            on backend features.
          </p>
        </div>

        <div className="mb-16">
          <p
            id="paragraph2"
            className={`text-lg text-gray-500 text-center max-w-4xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible.paragraph2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            I've integrated AI into projects like real-time chatbots and CV
            builders. I enjoy learning new technologies and contributing to
            projects. Resilient, creative, and fast on my feet. I bring both
            tech skills and problem-solving energy to every project.
          </p>
        </div>

        {/* Grid Section with connecting SVG paths */}
        <div className="relative">
          {/* Connecting paths between grid items */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M16.5,50 Q50,30 83.5,50"
              stroke="url(#connectGradient)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
              className={`transition-all duration-2000 ${
                isVisible.grid ? "" : ""
              }`}
              style={{
                strokeDasharray: "100",
                strokeDashoffset: isVisible.grid ? "0" : "100",
                transitionDelay: "1000ms",
              }}
            />
            <defs>
              <linearGradient
                id="connectGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          <div
            id="grid"
            className={`grid md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-1000 transform ${
              isVisible.grid
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {aboutItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-8 backdrop-blur-sm bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:-translate-y-3 overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Animated background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  {/* Animated border glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 -z-10`}
                  ></div>

                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${item.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-center text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Subtle particle effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-draw-path {
          transition: stroke-dashoffset 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
