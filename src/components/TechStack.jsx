import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Server, Cloud, Shield } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import { useTheme } from "../context/ThemeContext";

const categories = [
  {
    title: "Backend & Core",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "gRPC", "Hibernate"],
    spotlight: "rgba(99, 102, 241, 0.2)"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
    spotlight: "rgba(59, 130, 246, 0.2)"
  },
  {
    title: "Databases & Events",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka"],
    spotlight: "rgba(16, 185, 129, 0.2)"
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-rose-400" />,
    skills: ["React", "Angular", "JavaScript", "Tailwind CSS"],
    spotlight: "rgba(244, 63, 94, 0.2)"
  },
  {
    title: "Security & Architecture",
    icon: <Shield className="w-5 h-5 text-amber-400" />,
    skills: ["OAuth2", "JWT", "RBAC", "System Design", "Event-Driven"],
    spotlight: "rgba(245, 158, 11, 0.2)"
  }
];

export default function TechStack() {
  const { currentTheme } = useTheme();

  return (
    <section id="tech" className="py-24 px-4 max-w-5xl mx-auto relative z-10 scroll-mt-16">
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
          Tools & Architecture
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
          Tech Stack
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
          Production-hardened languages, frameworks, cloud services, and storage engines I use to build resilient systems.
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
            className="h-full"
          >
            <SpotlightCard
              enableTilt={true}
              spotlightColor={category.spotlight}
              className="p-6 h-full flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs md:text-sm font-medium text-zinc-300 bg-zinc-800/60 border border-zinc-700/40 rounded-lg hover:bg-zinc-700/80 hover:text-white hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
