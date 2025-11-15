import { motion } from "framer-motion";

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
];

export default function Projects() {
  return (
    <div className="max-width py-24">
      <h2 className="text-4xl font-bold mb-8 text-[rgb(var(--color-text))]">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.001 }}
            className="group glass p-6 rounded-2xl block border-transparent hover:border-[rgba(var(--color-text),0.1)] transition-colors"
          >
            <h3 className="text-xl font-semibold text-[rgb(var(--color-text))] mb-2">
              {p.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-[rgba(var(--color-text),0.08)] hover:shadow-md hover:scale-[1.01]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
