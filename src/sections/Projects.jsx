import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "AI Chatbot for Jira (Levi9 Internship)",
    desc: [
      "AI-powered chatbot integrated with Jira using Retrieval-Augmented Generation (RAG)",
      "Backend: AWS Lambda (Python) orchestrating Jira webhook and query processing",
      "Semantic search powered by Pinecone vector embeddings",
      "Angular SPA deployed using AWS S3 + CloudFront",
      "AWS Bedrock LLM for accurate ticket-referenced responses",
    ].join("\n"),
    tech: [
      "Angular",
      "AWS Bedrock",
      "AWS CloudFront",
      "AWS Lambda",
      "AWS S3",
      "Pinecone",
      "Python",
    ],
    link: "https://github.com/crncevicmarko/LLM-AWS-Search",
  },
  {
    title: "Tourism Booking Platform",
    desc: [
      "Full-stack development of a tourism booking platform similar to GetYourGuide",
      "Backend implemented in .NET (C#) with Angular frontend",
      "PostgreSQL database ensuring transactional consistency",
      "Designed service aggregators to integrate multi-source data",
      "Conducted real user interviews to improve features and UX",
      "Delivered product increments within a Scrum/Agile environment",
    ].join("\n"),
    tech: [".NET", "C#", "Angular", "PostgreSQL", "Scrum/Agile"],
    link: "https://github.com/akoskissak/psw-be-ra-2024-group-6",
  },
  {
    title: "Microservices-Based Tourism Platform",
    desc: [
      "Distributed microservices system for tourism activities and user interactions",
      "Backend: Golang + Python, REST & RPC communication",
      "Data layer: PostgreSQL, MongoDB, Neo4j",
      "Role-based access (Admin, Tour Guide, Tourist)",
      "Tour creation with geolocation, blogs, recommendations, purchases",
      "Docker Compose orchestration with independent deployments",
      "Monitoring & tracing: Prometheus, Grafana, Jaeger, Telegraf",
    ].join("\n"),
    tech: [
      "Angular",
      "Docker",
      "Golang",
      "Grafana",
      "Jaeger",
      "MongoDB",
      "Neo4j",
      "PostgreSQL",
      "Prometheus",
      "Python",
      "REST",
      "RPC",
      "Telegraf",
    ],
    link: "https://github.com/akoskissak/soa-team-5",
  },
  {
    title: "EduToolkit - AI Interactive Tools Generator",
    desc: [
      "Electron app enabling creation of standalone interactive educational tools",
      "Wizard-based interface for defining objects and interactions",
      "Optional image upload -> AI generates descriptions & elements",
      "Outputs single HTML files with embedded JS/CSS",
      "Natural language editing via chat interface using GPT-5 Mini",
    ].join("\n"),

    tech: ["CSS", "ElectronJS", "GPT API", "HTML", "JS"],
    link: "https://github.com/akoskissak/EduToolkit",
  },
  {
    title: "PKI and Shared Password Manager",
    desc: [
      "Full PKI solution + secure password manager in Spring Boot + Angular",
      "Support for issuing, revoking, validating X.509 certificates",
      "Encrypted password sharing using Web Crypto API",
      "Secure practices: JWT tracking, HTTPS, reCAPTCHA, audit logs",
      "Protection against SQL Injection, XSS, and other attacks",
      "Optional 2FA for high security",
    ].join("\n"),
    tech: [
      "Angular",
      "Java",
      "Maven",
      "npm",
      "PostgreSQL",
      "Spring Boot",
      "Web Crypto API",
    ],
    link: "https://github.com/akoskissak/pki-system",
  },
  {
    title: "Habit Master - RPG Habit & Goal Tracker",
    desc: [
      "Gamified Android application for tracking goals and habits",
      "RPG mechanics: XP, leveling, gear, boss fights",
      "Quest log with difficulty-based reward system",
      "Firebase + SQLite for data persistence & sync",
      "Supports collaborative Guild Missions",
    ].join("\n"),
    tech: ["Android", "Firebase", "Java", "SQLite"],
    link: "https://github.com/akoskissak/e2-ma-tim02-2025",
  },
  {
    title: "Duck Detection Script - Computer Vision",
    desc: [
      "Python script detecting and counting ducks using OpenCV",
      "HSV filtering + contour detection for object isolation",
      "Compares output against ground truth from CSV",
      "Calculates Mean Absolute Error (MAE) for evaluation",
    ].join("\n"),
    tech: ["NumPy", "OpenCV", "Pandas", "Python"],
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
    if (typeof gtag !== "undefined") {
      gtag("event", "project_open", {
        event_category: "Projects",
        event_label: project.title,
      });
    }
  };
  const closeModal = () => setSelectedProject(null);

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
            {/* Short bullet preview */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {p.desc.split("\n")[0]}
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
