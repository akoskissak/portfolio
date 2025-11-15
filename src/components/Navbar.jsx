import { useEffect, useState } from "react";

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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-6 py-2 rounded-full flex gap-6 items-center shadow-lg border">
        <div className="flex gap-4 items-center">
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
            className="ml-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors hover:bg-[rgba(var(--color-glass-bg),0.1)] text-gray-500 hover:text-[rgb(var(--color-text))]"
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
