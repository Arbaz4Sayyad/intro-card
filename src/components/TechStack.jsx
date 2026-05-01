import { motion } from "framer-motion";
import { Database, Layout, Server, Cloud, Shield } from "lucide-react";

const categories = [
  {
    title: "Backend & Core",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "gRPC", "Hibernate"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"]
  },
  {
    title: "Databases & Events",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-rose-400" />,
    skills: ["React", "Angular", "JavaScript", "Tailwind CSS"]
  },
  {
    title: "Security & Architecture",
    icon: <Shield className="w-5 h-5 text-amber-400" />,
    skills: ["OAuth2", "JWT", "RBAC", "System Design", "Event-Driven"]
  }
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-4">Tech Stack</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Production-hardened tools and frameworks I use to build scalable systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-200">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-800/50 border border-zinc-700/30 rounded-lg hover:bg-zinc-700 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
