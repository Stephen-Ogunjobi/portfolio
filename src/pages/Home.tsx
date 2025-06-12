import {
  SiAstro,
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiSupabase,
  SiMysql,
  SiGnubash,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";

export default function Home() {
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
    { name: "Astro", icon: SiAstro, color: "text-orange-500" },
    { name: "Vue", icon: SiVuedotjs, color: "text-green-500" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Bash", icon: SiGnubash, color: "text-gray-300" },
  ];

  // Duplicate the tech stack for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="h-screen lg:min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-3 py-6 lg:py-5 overflow-hidden lg:overflow-visible">
      {/* Hero Content */}
      <div className="w-full lg:max-w-xs xl:max-w-5xl mx-auto space-y-8 lg:space-y-0">
        {/* Greeting */}
        <p className="text-gray-400 text-xl lg:text-2xl mb-6 lg:mb-6 font-inter">
          Hi, I'm Stephen
        </p>

        {/* Main Title */}
        <h1 className="text-5xl lg:text-6xl xl:text-6xl font-bold font-poppins mb-6 lg:mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Frontend
          <br />
          Developer
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg lg:text-xl max-w-4xl lg:max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed font-inter px-0 lg:px-0">
          Transforming ideas into functional, user friendly and seamless digital
          experiences with modern frontend tools and AI integration
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 lg:gap-8 mb-8 lg:mb-10">
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
                <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
              </a>
            );
          })}
        </div>

        {/* Moving Tech Stack - Single Row on Mobile/Medium, Two Rows on Desktop */}
        <div className="space-y-4 lg:space-y-4">
          {/* First row - Left scroll */}
          <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-gray-900/30 to-transparent py-6 lg:py-6 rounded-xl lg:rounded-2xl">
            <div className="flex animate-scroll-left space-x-8 lg:space-x-12">
              {duplicatedTechStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex flex-col items-center justify-center min-w-fit group flex-shrink-0"
                  >
                    <div
                      className={`${tech.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
                    </div>
                    <span className="text-gray-500 text-sm lg:text-base mt-2 lg:mt-2 font-poppins whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
