import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "CV", href: "#cv" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );

    NAV.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50" ref={navRef}>
      <div className="glass px-4 sm:px-6 py-2 rounded-full flex gap-4 sm:gap-6 items-center shadow-lg border">
        <div className="hidden sm:flex gap-4 items-center">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`px-3 py-1 rounded-md text-sm transition-all ${
                active === n.href
                  ? "bg-[rgba(var(--color-glass-bg),0.1)] font-medium"
                  : "text-gray-500 hover:text-[rgb(var(--color-text))]"
              }`}
            >
              {n.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`ml-1 sm:ml-4 w-10 h-5 rounded-full relative flex items-center transition-colors duration-300 shadow-inner 
              ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            <div
              className={`absolute w-3 h-3 rounded-full shadow-md transition-transform duration-300 
                ${
                  theme === "dark"
                    ? "translate-x-1 bg-white"
                    : "translate-x-6 bg-yellow-500"
                }`}
            />
          </button>
        </div>

        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-[rgb(var(--color-text))] p-1 mr-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            onClick={toggleTheme}
            className={`w-10 h-5 rounded-full relative flex items-center transition-colors duration-300 shadow-inner 
              ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            <div
              className={`absolute w-3 h-3 rounded-full shadow-md transition-transform duration-300 
                ${
                  theme === "dark"
                    ? "translate-x-1 bg-white"
                    : "translate-x-6 bg-yellow-500"
                }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-[200px] left-1/2 -translate-x-1/2 glass p-4 rounded-xl shadow-xl border sm:hidden z-40"
          >
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={handleLinkClick}
                  className={`py-2 px-3 rounded-lg text-base transition-all text-center ${
                    active === n.href
                      ? "bg-[rgba(var(--color-glass-bg),0.2)] font-medium text-[rgb(var(--color-text))]"
                      : "text-gray-500 hover:bg-[rgba(var(--color-glass-bg),0.1)] hover:text-[rgb(var(--color-text))]"
                  }`}
                >
                  {n.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
