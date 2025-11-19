import { motion } from "framer-motion";

export default function CV() {
  const handleDownloadCV = () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "download_cv", {
        event_category: "CV",
        event_label: "Download CV PDF",
      });
    }
  };
  return (
    <div className="max-width py-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[rgb(var(--color-text))]">
        CV / Resume
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg text-gray-500 mb-6">
          Download a PDF version of my resume for full details, experience, and
          projects.
        </p>
        <a
          href="CV_AkosKiss.pdf"
          download="CV_AkosKiss.pdf"
          onClick={handleDownloadCV}
          className="px-6 py-3 rounded-full bg-[rgb(var(--color-text))] text-[rgb(var(--color-bg))] font-medium shadow transition-colors hover:opacity-90"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
}
