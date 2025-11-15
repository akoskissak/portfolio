import { motion } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-[rgba(var(--color-text),0.3)] shadow-[0_0_50px_rgba(var(--color-text),0.1)] backdrop-blur-md"
        >
          <img
            src={profile}
            alt="Ákos profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,rgb(var(--color-text))_50%,rgba(var(--color-text),0.8)_100%)]"
        >
          Hi, I'm Ákos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-500 max-w-xl"
        >
          A passionate developer crafting interactive tools and experiences that
          blend design, logic, and creativity.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 px-6 py-3 bg-[rgba(var(--color-text),0.05)] hover:bg-[rgba(var(--color-text),0.1)] rounded-full font-medium border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] backdrop-blur-md transition-all shadow-md"
        >
          View My Projects
        </motion.a>
      </div>
    </section>
  );
}
