import { Outlet } from "react-router-dom";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function AppLayout() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    {
      name: "Home",
      sectionId: "home",
      icon: Home,
      activeColor: "from-cyan-400 to-blue-500",
      glowColor: "shadow-cyan-500/30",
      hoverGlow: "hover:shadow-cyan-400/20",
    },
    {
      name: "About",
      sectionId: "about",
      icon: User,
      activeColor: "from-emerald-400 to-teal-500",
      glowColor: "shadow-emerald-500/30",
      hoverGlow: "hover:shadow-emerald-400/20",
    },
    {
      name: "Projects",
      sectionId: "projects",
      icon: FolderOpen,
      activeColor: "from-orange-400 to-pink-500",
      glowColor: "shadow-orange-500/30",
      hoverGlow: "hover:shadow-orange-400/20",
    },
    {
      name: "Contact",
      sectionId: "contact",
      icon: Mail,
      activeColor: "from-purple-400 to-pink-500",
      glowColor: "shadow-purple-500/30",
      hoverGlow: "hover:shadow-purple-400/20",
    },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.sectionId);
      let currentSection = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Navigation - Glass Design for Desktop */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit">
        <div className="relative">
          {/* Glass container with enhanced glassmorphism */}
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-2 shadow-2xl">
            {/* Animated glass border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20  via-pink-500/20 to-cyan-500/20 blur-sm animate-pulse"></div>

            {/* Inner glass reflection */}
            <div className="absolute inset-1 rounded-xl bg-gradient-to-t from-white/5 to-white/20 pointer-events-none"></div>

            {/* Navigation links */}
            <div className="relative flex space-x-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.sectionId;

                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.sectionId)}
                    className={`
                      relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 flex items-center gap-2 group overflow-hidden
                      ${
                        isActive
                          ? `text-white bg-white/10 transform scale-105 border border-white/30 backdrop-blur-xl`
                          : `text-white/60 hover:text-white/90 hover:bg-white/5 hover:scale-105 ${link.hoverGlow}`
                      }
                    `}
                  >
                    {/* Active state glass reflection */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-xl"></div>
                    )}

                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl"></div>

                    <IconComponent
                      className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                        isActive
                          ? "animate-pulse drop-shadow-lg"
                          : "group-hover:scale-110 group-hover:drop-shadow-lg"
                      }`}
                    />
                    <span className="relative z-10 font-poppins font-medium tracking-wide text-sm">
                      {link.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Glass Design */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="relative">
          {/* Glass container for mobile */}
          <div className="relative bg-white/10 backdrop-blur-2xl border-t border-white/20 p-1.5 shadow-2xl">
            {/* Mobile glass border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm animate-pulse"></div>

            {/* Inner glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/20 pointer-events-none"></div>

            {/* Mobile navigation links */}
            <div className="relative flex justify-around items-center">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.sectionId;

                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.sectionId)}
                    className={`
                      relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-500 group
                      ${
                        isActive
                          ? `bg-gradient-to-r ${link.activeColor} text-white shadow-lg ${link.glowColor} transform scale-105`
                          : `text-white/80 hover:text-white hover:bg-white/10 ${link.hoverGlow}`
                      }
                    `}
                  >
                    {isActive && (
                      <>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${link.activeColor} opacity-15 blur-md rounded-lg`}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-lg"></div>
                      </>
                    )}

                    <IconComponent
                      className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                        isActive
                          ? "animate-pulse drop-shadow-md"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span
                      className={`relative z-10 text-xs font-poppins font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white drop-shadow-md"
                          : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="  py-6 px-4  pb-20 md:pb-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Outlet />
      </main>
    </div>
  );
}
