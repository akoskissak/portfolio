import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import CV from "./sections/cv";
import Contact from "./sections/Contact";
import { initAnalytics } from "./analytics";

export default function App() {
  const getInitialTheme = () => {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7 ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = theme;
    initAnalytics();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen antialiased relative">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-20 -top-[400px] -left-[400px] blob-gradient-1 transition-opacity duration-500" />
        <div className="absolute w-[900px] h-[900px] rounded-full blur-[100px] opacity-20 bottom-[-450px] right-[-450px] blob-gradient-2 transition-opacity duration-500" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="snap-y snap-mandatory overflow-y-auto relative z-10">
        <section className="section-snap" id="hero">
          <Hero />
        </section>
        <section className="section-snap" id="about">
          <About />
        </section>
        <section className="section-snap" id="projects">
          <Projects />
        </section>
        <section className="section-snap" id="skills">
          <Skills />
        </section>
        <section className="section-snap" id="cv">
          <CV />
        </section>
        <section className="section-snap" id="contact">
          <Contact />
        </section>
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 flex justify-center items-center gap-4 relative z-10">
        <span>© {new Date().getFullYear()} Ákos Kiss</span>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-full text-xs font-medium border border-current transition-colors hover:bg-white/10 dark:hover:bg-black/10"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </footer>
    </div>
  );
}
