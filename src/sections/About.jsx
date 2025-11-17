import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-width py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(var(--color-text))]">
            About me
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            I’m a software engineer who enjoys building interactive web
            experiences, clean engineering and accessible UI. I focused on
            projects with educational value and automation.
          </p>
        </div>

        <div className="glass p-6 rounded-2xl">
          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Location:
              </strong>{" "}
              Novi Sad, Serbia
            </li>
            <li>
              <strong className="text-[rgb(var(--color-text))]">Degree:</strong>{" "}
              Applied Science and Informatics - BSc
            </li>
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Interests:
              </strong>{" "}
              AI & Machine Learning, Natural Language Processing, Interactive
              Web Applications, Cloud & Serverless Architecture, Microservices &
              Distributed Systems, DevOps & Containerization, Educational
              Technology, Frontend & UX Development, Data Visualization,
              Full-Stack Development
            </li>
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Languages:
              </strong>{" "}
              English, Hungarian, Serbian
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
