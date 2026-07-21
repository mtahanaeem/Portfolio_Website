import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experience } from "../data/content";
import { GraduationCap } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-1/3 left-[-10%] w-[40%] h-[40%] rounded-full bg-gold/5 blur-[100px] -z-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          <span className="text-gold">/</span> education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface border border-magenta/30 flex items-center justify-center">
                  {item.type === "education" ? (
                    <GraduationCap size={18} className="text-magenta" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-cyan" />
                  )}
                </div>

                <div className="rounded-xl border border-white/10 bg-card-bg backdrop-blur-sm p-5">
                  <span className="text-xs font-body text-cyan uppercase tracking-wider">{item.period}</span>
                  <h3 className="font-heading text-lg font-bold text-text-primary mt-1">{item.degree}</h3>
                  <p className="text-text-secondary text-sm font-body">{item.institution}</p>
                  <ul className="mt-3 space-y-1">
                    {item.details.map((d, di) => (
                      <li key={di} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-magenta mt-1 text-xs">&#9679;</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
