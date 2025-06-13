import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState({
    title: false,
    form: false,
    social: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        { id: "title", ref: document.getElementById("contact-title") },
        { id: "form", ref: document.getElementById("contact-form") },
        { id: "social", ref: document.getElementById("social-links") },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/anlxkzea", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Animated Background SVG Paths */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Decorative animated path 1 */}
          <path
            d="M0,200 Q300,100 600,200 T1200,300"
            stroke="url(#contactGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className={`transition-all duration-2000`}
            style={{
              strokeDasharray: "1000",
              strokeDashoffset: isVisible.title ? "0" : "1000",
            }}
          />

          {/* Decorative animated path 2 */}
          <path
            d="M0,500 Q400,350 800,500 T1200,600"
            stroke="url(#contactGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            className={`transition-all duration-2500`}
            style={{
              strokeDasharray: "1200",
              strokeDashoffset: isVisible.form ? "0" : "1200",
              transitionDelay: "300ms",
            }}
          />

          {/* Form connecting path */}
          <path
            d="M600,400 Q800,350 1000,400"
            stroke="url(#contactGradient3)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            className={`transition-all duration-1500`}
            style={{
              strokeDasharray: "400",
              strokeDashoffset: isVisible.form ? "0" : "400",
              transitionDelay: "800ms",
            }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient
              id="contactGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="contactGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="contactGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float transition-all duration-1000 ${
              isVisible.form ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${15 + i * 18}%`,
              top: `${25 + (i % 3) * 25}%`,
              animationDelay: `${i * 600}ms`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div
        id="contact-title"
        className={`mb-16 transition-all duration-1000 transform ${
          isVisible.title
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl text-center lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Title and Message */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 transform ${
              isVisible.form
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              You bring the vision, I bring the skills.
            </p>

            {/* Animated underline */}
            <div className="relative mt-4">
              <svg
                className="absolute -bottom-2 left-0"
                width="250"
                height="20"
                viewBox="0 0 250 20"
              >
                <path
                  d="M10,15 Q125,5 240,15"
                  stroke="url(#titleUnderline)"
                  strokeWidth="2"
                  fill="none"
                  className={`transition-all duration-1500`}
                  style={{
                    strokeDasharray: "250",
                    strokeDashoffset: isVisible.form ? "0" : "250",
                    transitionDelay: "600ms",
                  }}
                />
                <defs>
                  <linearGradient
                    id="titleUnderline"
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
          </div>

          {/* Right side - Contact Form */}
          <div
            id="contact-form"
            className={`relative p-8 rounded-lg shadow-lg backdrop-blur-sm bg-white/10 border border-white/20 transition-all duration-1000 transform ${
              isVisible.form
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://getform.io/f/anlxkzea"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-4 px-6 text-white rounded-xl overflow-hidden group transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl transition-all duration-300 group-hover:border-white/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-xl transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500" />

                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-2 bg-white/20 rounded-lg animate-ping" />
                </div>

                {/* Sliding shine effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute -left-4 top-0 h-full w-6 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine" />
                </div>

                {/* Loading spinner */}
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}

                <span
                  className={`relative z-10 font-semibold transition-all duration-300 ${
                    isSubmitting ? "opacity-0" : "opacity-100"
                  } group-hover:tracking-wide`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>

                {/* Particle effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 10}%`,
                        animationDelay: `${i * 200}ms`,
                      }}
                    />
                  ))}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div
          id="social-links"
          className={`mt-16 transition-all duration-1000 transform ${
            isVisible.social
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center space-x-8 mb-8">
            {[
              {
                href: "https://github.com/stephen-ogunjobi",
                icon: Github,
                label: "GitHub",
                delay: "0ms",
              },
              {
                href: "https://linkedin.com/in/stephen-ogunjobi",
                icon: Linkedin,
                label: "LinkedIn",
                delay: "200ms",
              },
              {
                href: "mailto:stephenogunjobi400@gmail.com",
                icon: Mail,
                label: "Email",
                delay: "400ms",
              },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-500 hover:scale-110 transform ${
                    isVisible.social
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: social.delay }}
                >
                  <div className="relative p-4 rounded-full bg-gradient-to-r from-gray-100 via-white to-gray-100 group-hover:from-blue-100 group-hover:via-blue-50 group-hover:to-purple-100 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-200/50 border border-gray-200 group-hover:border-blue-300">
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500" />
                    <IconComponent className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12" />

                    {/* Subtle particle effect */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>
                  <span className="hidden sm:block font-medium transition-all duration-300 group-hover:font-semibold">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div
            className={`flex justify-center text-gray-500 transition-all duration-1000 transform ${
              isVisible.social
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Designed and Developed by Stephen Ogunjobi
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(300%) skewX(-12deg);
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-out;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
