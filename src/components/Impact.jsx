import React from "react";
import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck, Activity } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import { useTheme } from "../context/ThemeContext";

const impacts = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: "Latency & Performance Scaling",
    description: (
      <>
        Designed <b>15+ production REST APIs</b> and implemented Redis caching, cutting average response time by <b>20–30%</b>. Reduced query latency by <b>30–40%</b> via indexing and N+1 query elimination.
      </>
    ),
    spotlight: "rgba(99, 102, 241, 0.2)"
  },
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    title: "Event-Driven Architecture",
    description: (
      <>
        Engineered Kafka-based event-driven architecture across <b>4 microservices</b>, eliminating synchronous coupling and achieving <b>99.9% fault isolation</b> in production fintech environments.
      </>
    ),
    spotlight: "rgba(16, 185, 129, 0.2)"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    title: "Security & Access Control",
    description: (
      <>
        Secured microservices handling sensitive data by implementing <b>JWT & RBAC</b>, eliminating unauthorized access vectors and enforcing least-privilege control across all enterprise roles.
      </>
    ),
    spotlight: "rgba(59, 130, 246, 0.2)"
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "CI/CD & Observability",
    description: (
      <>
        Automated Jenkins & Docker pipelines, reducing deployment cycle time by <b>50%</b>. Established full observability stack with Prometheus/Grafana for <b>real-time system health</b>.
      </>
    ),
    spotlight: "rgba(244, 63, 94, 0.2)"
  }
];

export default function Impact() {
  const { currentTheme } = useTheme();

  return (
    <section id="impact" className="py-24 px-4 max-w-5xl mx-auto relative z-10 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-left"
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border"
          style={{
            backgroundColor: currentTheme.badgeBg,
            color: currentTheme.color,
            borderColor: currentTheme.badgeBorder
          }}
        >
          Measurable Results
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
          Engineering Impact
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-3xl">
          Measurable architectural and operational improvements delivered across distributed microservices and production fintech infrastructure.
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
          >
            <SpotlightCard
              enableTilt={true}
              spotlightColor={impact.spotlight}
              className="p-6 md:p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group cursor-default"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:border-zinc-700 transition-all duration-300 shadow-inner">
                  {impact.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                    {impact.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {impact.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
