import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.743.082-.729.082-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 21.801 24 17.309 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const bulletItems = project.desc
    .replace(/\r/g, "")
    .split(/\n|\t/)
    .filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-[rgba(var(--color-bg),0.8)]"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="glass p-8 rounded-2xl w-full max-w-lg lg:max-w-xl max-h-[75vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[rgb(var(--color-text))]">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="text-[rgb(var(--color-text))] text-3xl ml-4 opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close project details"
            >
              &times;
            </button>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm leading-relaxed mb-6">
            {bulletItems.map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>

          <motion.div
            className="flex gap-2 flex-wrap mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {project.tech.map((t) => (
              <motion.span
                key={t}
                variants={itemVariants}
                className="text-sm px-3 py-1 rounded-full bg-[rgba(var(--color-text),0.1)] font-medium"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#24292F] text-white font-semibold shadow-lg transition-colors duration-500 hover:bg-[#6e499d]"
          >
            <GithubIcon className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
