import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-4 text-center">Experience</h2>
      </motion.div>

      <div className="relative pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />

        {/* Experience Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 w-full"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[-39px] md:left-[-55px] top-6 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#09090b] z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-colors">
            <div className="mb-4">
               <p className="text-indigo-400 font-semibold mb-1">Jan 2024– Present</p>
              <p className="text-zinc-500 text-sm">Pune, India</p>
            </div>
            
            <h3 className="text-xl font-bold text-zinc-100 mb-1 flex items-center gap-2">
               Software Engineer - Backend
            </h3>
            <p className="text-zinc-400 font-medium mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> AJ TechSoft
            </p>
            
            <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed text-left">
              <li className="flex gap-2">
                <span className="text-indigo-500 mt-1">▹</span>
                Engineered event-driven microservice architecture on Kafka, eliminating synchronous coupling for high-reliability fintech platform.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 mt-1">▹</span>
                Designed and shipped 15+ core production APIs, cutting response time by 20–30% using Redis.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500 mt-1">▹</span>
                Automated CI/CD pipelines and established Prometheus/Grafana observability stack.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
