import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, User, FolderOpen, Mail } from "lucide-react";

export default function AppLayout() {
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
      activeColor: "from-blue-500 to-purple-600",
      glowColor: "shadow-blue-500/50",
    },
    {
      name: "About",
      path: "/about",
      icon: User,
      activeColor: "from-green-500 to-teal-600",
      glowColor: "shadow-green-500/50",
    },
    {
      name: "Projects",
      path: "/projects",
      icon: FolderOpen,
      activeColor: "from-orange-500 to-red-600",
      glowColor: "shadow-orange-500/50",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
      activeColor: "from-pink-500 to-rose-600",
      glowColor: "shadow-pink-500/50",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Navigation - Sticky top on large screens */}
      <nav className="hidden md:block sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center py-4">
            <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 p-3 shadow-2xl animate-pulse-glow">
              {/* Glowing border animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm animate-border-glow"></div>

              <div className="relative flex space-x-2">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`
                        relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 group overflow-hidden
                        ${
                          isActive
                            ? `bg-gradient-to-r ${link.activeColor} text-white shadow-lg ${link.glowColor} transform scale-105`
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                        }
                      `}
                    >
                      {/* Active state background glow */}
                      {isActive && (
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${link.activeColor} opacity-20 blur-xl`}
                        ></div>
                      )}

                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      <IconComponent
                        className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                          isActive ? "animate-bounce" : "group-hover:scale-110"
                        }`}
                      />
                      <span className="relative z-10 font-poppins font-medium">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full-width sticky bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
        <div className="flex justify-around items-center py-3 px-4">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 group
                  ${
                    isActive
                      ? `bg-gradient-to-r ${link.activeColor} text-white shadow-lg ${link.glowColor} transform scale-105`
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }
                `}
              >
                {/* Active state background glow */}
                {isActive && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.activeColor} opacity-30 blur-lg rounded-xl`}
                  ></div>
                )}

                <IconComponent
                  className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                    isActive ? "animate-bounce" : "group-hover:scale-110"
                  }`}
                />
                <span
                  className={`relative z-10 text-xs font-poppins font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main content area - Add padding for sticky navs */}
      <main className="max-w-7xl mx-auto py-4 px-4 pb-24 md:pb-8">
        <Outlet />
      </main>
    </div>
  );
}
