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
            About Me
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            My journey in software engineering started with a fascination for
            understanding how complex systems work and a desire to make them
            more efficient. Over time, I found myself drawn to backend
            development, cloud infrastructure, and high-performance computing
            because I love solving challenging problems that have a strong
            impact on real-world applications.
            <br />
            <br />
            I am motivated by building scalable distributed systems, optimizing
            performance, and automating workflows that save time and resources.
            I thrive in projects where I can combine my technical skills with
            creativity to deliver solutions that matter.
            <br />
            <br />
            Currently, I’m seeking roles and projects focused on cloud-native
            applications, microservices, distributed systems, Data Engineering,
            and DevOps automation. I enjoy collaborating with teams to design
            robust solutions while continuously learning new technologies and
            approaches.
          </p>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-[rgb(var(--color-text))] mb-4">
            Academic & Personal Overview
          </h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Master's Degree:
              </strong>{" "}
              <span className="text-[rgb(var(--color-text))]">
                High Performance Computing (in progress)
              </span>{" "}
              <br />
              <span className="text-gray-400 text-xs">
                Focus: Distributed Systems, HPC, Cloud-native architectures
              </span>
            </li>
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Bachelor's Degree:
              </strong>{" "}
              <span className="text-[rgb(var(--color-text))]">
                Computing and Control Engineering
              </span>{" "}
              <br />
              <span className="text-gray-400 text-xs">
                Key courses: Algorithms, Parallel Computing, Software
                Engineering
              </span>
            </li>
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Languages:
              </strong>{" "}
              <span className="text-[rgb(var(--color-text))]">
                English, Hungarian, Serbian
              </span>
            </li>
            <li>
              <strong className="text-[rgb(var(--color-text))]">
                Location:
              </strong>{" "}
              <span className="text-[rgb(var(--color-text))]">
                Novi Sad, Serbia
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
