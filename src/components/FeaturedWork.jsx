import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import SpotlightCard from "./ui/SpotlightCard";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "AI Meeting Notes Pipeline",
    problem: (
      <>
        Engineered a scalable async transcription and summarization pipeline using Kafka, reducing manual note-taking effort by <b>70%</b>.
      </>
    ),
    tech: ["Spring Boot", "Kafka", "Gemini API", "PostgreSQL", "React"],
    github: "https://github.com/Arbaz4Sayyad/AI-Meeting-Notes",
    live: "https://drive.google.com/file/d/1FHvGXISMotO7OLaQqvoh8OhpSmw_mzg7/view",
    spotlight: "rgba(99, 102, 241, 0.25)"
  },
  {
    title: "Insurance Claims System",
    problem: (
      <>
        Designed a distributed claims engine on Kubernetes handling <b>10K+ daily requests</b> with high availability and fault tolerance.
      </>
    ),
    tech: ["Spring Boot", "Kubernetes", "Kafka", "OAuth2", "MySQL"],
    github: "https://github.com/Arbaz4Sayyad/Insurance-Eligibility-Claims-Processing-System",
    live: "#",
    spotlight: "rgba(16, 185, 129, 0.25)"
  },
  {
    title: "Spring Ecosystem Contributions",
    problem: (
      <>
        <b>Core Contributor</b> to Spring Kafka & Spring Framework. Resolving critical distributed systems issues for the global Java community.
      </>
    ),
    tech: ["Java", "Spring Kafka", "Spring Framework", "Distributed Systems"],
    github: "https://github.com/Arbaz4Sayyad/spring-contributions-showcase",
    live: "#",
    badge: "Core Contributor",
    spotlight: "rgba(244, 63, 94, 0.25)"
  }
];

export default function FeaturedWork() {
  const { currentTheme } = useTheme();

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto relative z-10 scroll-mt-16">
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
          Selected Projects & Code
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
          Featured Work
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
          High-impact distributed systems, real-time event pipelines, and active open-source contributions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
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
              spotlightColor={project.spotlight}
              className="p-6 md:p-7 h-full flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  {project.badge && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
