import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "EduToolkit",
    desc: "EduToolkit is an AI-driven platform designed to empower educators and students to create fully interactive educational tools as standalone HTML files, eliminating the need for programming knowledge. Users can define objects, behaviors, and interactions through a step-by-step wizard interface, with optional image uploads that the AI uses to automatically generate descriptive content and suggested elements. Each generated tool is self-contained, including embedded CSS and JavaScript, and supports IF–THEN logic to create guided, interactive learning experiences. The platform also features a chat-based interface, allowing users to refine, modify, or enhance generated tools using natural language instructions. Powered by GPT-5 Mini, EduToolkit automates complex content generation while keeping outputs pedagogically meaningful, visually engaging, and immediately deployable in any modern web browser without additional installation or dependencies.",
    tech: ["ElectronJS", "GPT API", "HTML", "JS", "CSS"],
    link: "https://github.com/akoskissak/EduToolkit",
  },
  {
    title: "AI Chatbot for Jira (Levi9 Internship)",
    desc: "The project implements an AI-powered chatbot fully integrated with Jira to provide users with quick, accurate, and context-aware answers to questions about projects and tickets. Using Retrieval-Augmented Generation (RAG), the chatbot retrieves relevant information directly from Jira tickets to generate grounded responses. The backend is built with AWS Lambda (Python), processing Jira webhooks and orchestrating user queries, while ticket content is stored as vector embeddings in Pinecone for efficient semantic search. The frontend is a responsive Angular SPA, deployed as a static site via AWS S3 and CloudFront, delivering a smooth chat experience. Every response includes a link to the original Jira ticket, ensuring traceability and transparency of information.",
    tech: [
      "Angular",
      "AWS Lambda",
      "Python",
      "Pinecone",
      "AWS Bedrock",
      "AWS S3",
      "AWS CloudFront",
    ],
    link: "https://github.com/crncevicmarko/LLM-AWS-Search",
  },
  {
    title: "Microservices-Based Tourism Platform",
    desc: "A microservices-based Tourist Application designed to manage users, tours, blogs, and interactions in a tourism ecosystem. The system supports multiple roles - Administrator, Tour Guide, and Tourist - with features including user registration, profile management, blog creation, following other users, tour creation with geolocation points, and tour purchase tracking. The backend is built with Golang and Python, using NoSQL (MongoDB, Neo4j) and SQL (PostgreSQL) databases, while the frontend is implemented in Angular (hosted in a separate repository). All services are containerized with Docker and orchestrated via Docker Compose, with monitoring and logging provided through a full stack including Prometheus, Grafana, Jaeger, and Telegraf. Microservices communicate via REST and RPC, ensuring independent deployment, scalability, and maintainability of the system.",
    tech: [
      "Golang",
      "Python",
      "Angular",
      "MongoDB",
      "Neo4j",
      "PostgreSQL",
      "REST",
      "RPC",
      "Docker",
      "Prometheus",
      "Grafana",
      "Jaeger",
      "Telegraf",
    ],
    link: "https://github.com/akoskissak/soa-team-5",
  },
  {
    title: "PKI and Shared Password Manager",
    desc: "A comprehensive security project implementing a Public Key Infrastructure (PKI) system and a Shared Password Manager for the 'Security in Electronic Business Systems' course. The PKI handles issuing, viewing, and revoking Root, Intermediate, and End-Entity certificates, supporting CSRs, and using templates for X.509 extensions. The Shared Password Manager encrypts passwords on the Angular frontend using the recipient's public key for secure storage and sharing. The system features secure user registration (with email confirmation), login with reCAPTCHA, HTTPS communication, active JWT token tracking, robust audit logging, resistance to common web attacks like SQL Injection and XSS, and two factor authentication.",
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "WEB Crypto API",
      "Maven",
      "npm",
    ],
    link: "https://github.com/akoskissak/pki-system",
  },
  {
    title: "Habit Master: RPG Habit & Goal Tracker",
    desc: "Habit Master is an Android mobile application designed to gamify productivity by transforming real-world goals and habits into an engaging RPG (Role-Playing Game) experience. Users manage daily tasks to earn XP, level up, unlock Equipment, and engage in challenging Boss Fights. The system uses task difficulty/importance to calculate XP rewards, driving user motivation and consistency. Core features include a Character Sheet (displaying Level, XP, Coins, Gear), a Quest Log (Task Management), a Leveling and Boss Fight system, and social Guild Missions where users collaborate to defeat joint bosses.",
    tech: ["Android", "Java", "SQLite", "Firebase"],
    link: "https://github.com/akoskissak/e2-ma-tim02-2025",
  },
  {
    title: "Duck Detection Script: Computer Vision for Counting",
    desc: "This Python script provides an automated solution for detecting and counting ducks within images using fundamental Computer Vision techniques. It leverages HSV color filtering to mask colors typically associated with ducks (white, yellow, and brown). The script then applies contour detection and filtering based on area to accurately count the isolated duck-like objects. It reads ground truth counts from a CSV file, compares them against the detected counts, and calculates the Mean Absolute Error (MAE) to quantify the overall accuracy of the detection methodology.",
    tech: ["Python", "OpenCV (cv2)", "NumPy", "Pandas"],
    link: "https://github.com/akoskissak/DuckDetection",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="max-width py-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[rgb(var(--color-text))]">
        Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => openModal(p)}
            whileHover={{ scale: 1.03 }}
            variants={itemVariants}
            className="group glass p-6 rounded-2xl block border-transparent hover:border-[rgba(var(--color-text),0.1)] transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-[rgb(var(--color-text))] mb-2">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {p.desc.split(". ")[0]}.
            </p>
            <div className="flex gap-2 flex-wrap">
              {p.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-[rgba(var(--color-text),0.08)]"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-[rgba(var(--color-text),0.08)]">
                  +{p.tech.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
