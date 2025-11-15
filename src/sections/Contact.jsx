import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="max-width py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-[rgb(var(--color-text))]">
          Contact
        </h2>
        <p className="text-gray-500 mb-6">
          Let’s connect - email, LinkedIn or GitHub.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="px-5 py-3 rounded-full border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] transition-colors hover:bg-[rgba(var(--color-text),0.05)]"
            href="mailto:akos@example.com"
          >
            Email
          </a>
          <a
            className="px-5 py-3 rounded-full border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] transition-colors hover:bg-[rgba(var(--color-text),0.05)]"
            href="https://linkedin.com/in/akoskissak"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="px-5 py-3 rounded-full border border-[rgba(var(--color-text),0.2)] text-[rgb(var(--color-text))] transition-colors hover:bg-[rgba(var(--color-text),0.05)]"
            href="https://github.com/akoskissak"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
