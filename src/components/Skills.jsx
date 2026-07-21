import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/content";

const categoryColors = {
  Languages: "from-magenta/20 to-magenta/5 border-magenta/30",
  "Data & ML": "from-cyan/20 to-cyan/5 border-cyan/30",
  "Data Engineering": "from-gold/20 to-gold/5 border-gold/30",
  "Frameworks & Tools": "from-magenta/15 to-cyan/10 border-magenta/20",
  Blockchain: "from-cyan/15 to-magenta/10 border-cyan/20",
};

const dotColors = {
  Languages: "bg-magenta",
  "Data & ML": "bg-cyan",
  "Data Engineering": "bg-gold",
  "Frameworks & Tools": "bg-magenta/60",
  Blockchain: "bg-cyan/60",
};

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan/5 blur-[120px] -z-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          <span className="text-cyan">/</span> skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              className={`rounded-xl border bg-gradient-to-br ${categoryColors[group.category] || "from-surface to-surface"} p-5 backdrop-blur-sm`}
            >
              <h3 className="font-heading text-sm uppercase tracking-[0.15em] text-text-secondary mb-3 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${dotColors[group.category] || "bg-magenta"}`} />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-white/5 text-text-primary text-sm font-body hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
