import { motion } from "framer-motion";

const skills = [
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
  "Angular",
  "AWS Lambda",
  "Python",
  "Pinecone",
  "AWS Bedrock",
  "AWS S3",
  "AWS CloudFront",
  "ElectronJS",
  "GPT API",
  "HTML",
  "JS",
  "CSS",
];

export default function Skills() {
  return (
    <div className="max-width py-24">
      <h2 className="text-4xl font-bold mb-6 text-[rgb(var(--color-text))]">
        Skills & Technologies
      </h2>
      <motion.div
        className="flex flex-wrap gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((s, i) => (
          <motion.span
            key={s}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ delay: i * 0.06 }}
            className="px-3 py-2 rounded-full bg-[rgba(var(--color-text),0.08)] text-sm"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
