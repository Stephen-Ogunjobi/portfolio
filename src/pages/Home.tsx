import HeroSection from "../components/HeroSection";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <HeroSection />
      <About />
      <Projects />
    </div>
  );
}
