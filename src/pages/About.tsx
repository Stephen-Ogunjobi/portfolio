import { useEffect, useState } from "react";

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

  return (
    <div
      id="about"
      className="py-5 lg:min-h-screen lg:py-18 px-6 lg:px-12 relative overflow-hidden"
    >
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

      {/* Enhanced Snowfall with Wind Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`snow-${i}`}
            className={`absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-snowfall-wind transition-opacity duration-1500 ${
              isVisible.paragraph1 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
            I discovered coding by trying to fix a real problem and realized I
            could build solutions instead of waiting for them.
          </p>
        </div>

        <div className="mb-16 space-y-6">
          <p
            id="paragraph2"
            className={`text-lg text-gray-500 text-center max-w-4xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible.paragraph2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            I’ve worked on fintech and AI-driven SaaS products, contributing to
            both new builds and production systems under load. On the backend, I
            have re-architected ingestion flows with Kafka to remove API
            bottlenecks, reduced a MongoDB aggregation through indexing fixes,
            and introduced structured error handling that surfaced silent
            production failures. On the frontend, I have cleaned up a large
            Next.js/React TypeScript codebase with performance debt by
            optimizing and simplifying component structure, reducing page load
            time by 40%. I focus on building systems that are reliable behind
            the scenes and straightforward for both users and engineers to work
            with.
          </p>

          <p
            className={`text-lg text-gray-500 text-center max-w-4xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible.paragraph2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            I work across the full stack React, Next.js, TypeScript on the
            frontend. Node.js, Express, NestJS on the backend. PostgreSQL and
            MongoDB for data. But the stack is secondary. What I actually care
            about is whether the thing works, scales, and makes sense to the
            person using it.
          </p>

          <p
            className={`text-lg text-gray-500 text-center max-w-4xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible.paragraph2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Outside of engineering, you'll find me reading or experimenting in
            the kitchen.
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
