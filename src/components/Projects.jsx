import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/content";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-[-10%] w-[40%] h-[40%] rounded-full bg-magenta/5 blur-[100px] -z-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          <span className="text-gold">/</span> projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative rounded-xl border border-white/10 bg-card-bg backdrop-blur-sm p-6 hover:border-magenta/40 transition-all duration-300"
            >
              {/* Hover gradient accent */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-magenta/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-magenta transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed line-clamp-3">
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded bg-white/5 text-text-secondary font-body"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-[11px] rounded bg-white/5 text-text-secondary">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm transition-colors"
                  aria-label={`${p.title} GitHub`}
                >
                  <GithubIcon size={15} /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-text-secondary hover:text-cyan text-sm transition-colors"
                    aria-label={`${p.title} live demo`}
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
