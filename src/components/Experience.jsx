import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import { useTheme } from "../context/ThemeContext";

export default function Experience() {
  const { currentTheme } = useTheme();

  return (
    <section id="experience" className="py-24 px-4 max-w-3xl mx-auto relative z-10 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border mx-auto"
          style={{
            backgroundColor: currentTheme.badgeBg,
            color: currentTheme.color,
            borderColor: currentTheme.badgeBorder
          }}
        >
          Career Timeline
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-2">
          Experience
        </h2>
        <p className="text-zinc-400 text-sm md:text-base">
          Proven background in designing and scaling production backend services.
        </p>
      </motion.div>

      <div className="relative pl-8 md:pl-12">
        {/* Timeline vertical bar */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />

        {/* Experience Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 w-full"
        >
          {/* Glowing Timeline Dot */}
          <div
            className="absolute left-[-39px] md:left-[-55px] top-6 w-4 h-4 rounded-full border-4 border-[#09090b] z-10 shadow-lg transition-colors duration-500"
            style={{
              backgroundColor: currentTheme.color,
              boxShadow: `0 0 15px ${currentTheme.color}`
            }}
          />

          <SpotlightCard
            enableTilt={false}
            className="p-6 md:p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span
                className="font-bold text-sm md:text-base px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: currentTheme.badgeBg,
                  color: currentTheme.color,
                  borderColor: currentTheme.badgeBorder
                }}
              >
                Oct 2023 – Present
              </span>
              <span className="text-zinc-500 text-xs md:text-sm flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Pune, India
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-1">
              Software Engineer - Backend
            </h3>
            <p className="text-zinc-300 font-medium mb-5 flex items-center gap-2 text-sm md:text-base">
              <Briefcase className="w-4 h-4 text-zinc-400" /> Bravezone Cloudware
            </p>

            <ul className="space-y-3.5 text-zinc-300 text-sm leading-relaxed text-left">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 font-bold" style={{ color: currentTheme.color }}>▹</span>
                <span>
                  Engineered <b>event-driven microservice architecture</b> on Kafka, eliminating synchronous coupling and delivering <b>99.9% fault isolation</b> for fintech workloads.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 font-bold" style={{ color: currentTheme.color }}>▹</span>
                <span>
                  Designed and shipped <b>15+ core production APIs</b>, optimizing database queries and integrating Redis caching to reduce response latency by <b>20–30%</b>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 font-bold" style={{ color: currentTheme.color }}>▹</span>
                <span>
                  Automated CI/CD deployment pipelines with <b>Docker & Jenkins</b>, cutting release cycles by <b>50%</b> and establishing full observability with Prometheus & Grafana.
                </span>
              </li>
            </ul>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
