import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Cloud Stack",
    items: ["AWS Lambda", "AWS S3", "AWS CloudFront", "AWS Bedrock"],
  },
  {
    category: "Backend Stack",
    items: ["Java", "C#", "Spring Boot", "Python", "RPC", "REST"],
  },
  {
    category: "Frontend / Web Stack",
    items: [
      "HTML",
      "CSS",
      "Angular",
      "ElectronJS",
      "Android",
      "WEB Crypto API",
    ],
  },
  {
    category: "DevOps / Monitoring",
    items: ["Docker", "Grafana", "Prometheus", "Jaeger", "Telegraf"],
  },
  {
    category: "Data & ML Stack",
    items: ["NumPy", "Pandas", "OpenCV (cv2)", "GPT API", "Pinecone"],
  },
  {
    category: "Database Stack",
    items: ["PostgreSQL", "MongoDB", "Neo4j", "SQLite"],
  },
  {
    category: "Other / Tools",
    items: [".NET", "Maven", "npm", "Scrum/Agile"],
  },
];

export default function Skills() {
  return (
    <div className="max-width py-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[rgb(var(--color-text))]">
        Skills & Technologies
      </h2>

      {skillGroups.map((group, gIdx) => (
        <div key={group.category} className="mb-6">
          <h3 className="font-semibold text-lg text-[rgb(var(--color-text))] mb-2">
            {group.category}
          </h3>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {group.items.map((s, i) => (
              <motion.span
                key={s}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ delay: i * 0.1 + gIdx * 0.2 }}
                className="px-3 py-2 rounded-full bg-[rgba(var(--color-text),0.08)] text-sm font-medium"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
