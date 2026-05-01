import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck, Activity } from "lucide-react";

const impacts = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: "Latency & Performance Scaling",
    description: <>Designed <b>15+ production REST APIs</b> and implemented Redis caching, cutting average response time by <b>20–30%</b>. Reduced query latency by <b>30–40%</b> via indexing and N+1 query elimination.</>
  },
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    title: "Event-Driven Architecture",
    description: <>Engineered Kafka-based event-driven architecture across <b>4 microservices</b>, eliminating synchronous coupling and achieving <b>99.9% fault isolation</b> in production fintech environments.</>
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    title: "Security & Access Control",
    description: <>Secured microservices handling sensitive data by implementing <b>JWT & RBAC</b>, eliminating unauthorized access vectors and enforcing least-privilege control across all enterprise roles.</>
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "CI/CD & Observability",
    description: <>Automated Jenkins & Docker pipelines, reducing deployment cycle time by <b>50%</b>. Established full observability stack with Prometheus/Grafana for <b>real-time system health</b>.</>
  }
];

export default function Impact() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-4">Engineering Impact</h2>
        <p className="text-zinc-400 text-lg max-w-4xl">
          Driving measurable improvements in latency, throughput, and system reliability for production environments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                {impact.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">{impact.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {impact.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
