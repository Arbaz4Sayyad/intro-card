import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./ui/Icons";

const projects = [
  {
    title: "AI Meeting Notes Pipeline",
    problem: "Scalable async transcription pipeline reducing manual note-taking effort by 70%.",
    tech: ["Spring Boot", "Kafka", "Gemini API", "PostgreSQL", "React"],
    github: "https://github.com/Arbaz4Sayyad/AI-Meeting-Notes",
    live: "https://drive.google.com/file/d/1FHvGXISMotO7OLaQqvoh8OhpSmw_mzg7/view",
    color: "from-indigo-500/20 to-blue-500/5",
    borderColor: "group-hover:border-indigo-500/50",
  },
  {
    title: "Insurance Claims System",
    problem: "Distributed claims processing on Kubernetes handling 10K+ daily requests with high availability.",
    tech: ["Spring Boot", "Kubernetes", "Kafka", "OAuth2", "MySQL"],
    github: "https://github.com/Arbaz4Sayyad/Insurance-Eligibility-Claims-Processing-System",
    live: "#",
    color: "from-emerald-500/20 to-teal-500/5",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    title: "Spring Ecosystem Contributions",
    problem: "Core contributor to Spring Kafka and Spring Framework resolving distributed systems issues.",
    tech: ["Java", "Spring Kafka", "Spring Framework", "Distributed Systems"],
    github: "https://github.com/Arbaz4Sayyad/spring-contributions-showcase",
    live: "#",
    color: "from-rose-500/20 to-orange-500/5",
    borderColor: "group-hover:border-rose-500/50",
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-4">Featured Work</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          A selection of high-impact systems and open-source contributions.
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
            className={`group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${project.borderColor}`}
          >
            {/* Hover Glow Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${project.color} transition-opacity duration-500 pointer-events-none`} />
            
            <div className="relative p-6 h-full flex flex-col">
              <div className="mb-4">
                <Code2 className="w-8 h-8 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-6 flex-grow">
                {project.problem}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50">
                <a href={project.github} className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  <GithubIcon className="w-4 h-4" /> Code
                </a>
                <a href={project.live} className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
