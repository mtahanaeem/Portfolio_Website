import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { about } from "../data/content";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-[-10%] w-[40%] h-[50%] rounded-full bg-magenta/5 blur-[120px] -z-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          <span className="text-magenta">/</span> about
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Image — outer ring + inner photo blob, animated in perfect sync */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex items-center justify-center"
          >
            <motion.div
              className="p-4"
              animate={{
                y: [0, -8, 0],
                borderRadius: [
                  "30% 70% 40% 60%",
                  "50% 50% 30% 70%",
                  "40% 60% 60% 40%",
                  "60% 40% 50% 50%",
                  "35% 65% 45% 55%",
                  "55% 45% 35% 65%",
                  "30% 70% 40% 60%",
                ],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                border: "2px solid rgba(217, 70, 239, 0.25)",
                boxShadow: "0 0 24px rgba(217, 70, 239, 0.08)",
              }}
            >
              <motion.div
                className="w-56 h-56 md:w-64 md:h-64"
                animate={{
                  y: [0, -8, 0],
                  borderRadius: [
                    "30% 70% 40% 60%",
                    "50% 50% 30% 70%",
                    "40% 60% 60% 40%",
                    "60% 40% 50% 50%",
                    "35% 65% 45% 55%",
                    "55% 45% 35% 65%",
                    "30% 70% 40% 60%",
                  ],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  borderRadius: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  border: "1.5px solid rgba(217, 70, 239, 0.2)",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, rgba(217, 70, 239, 0.3), rgba(6, 182, 212, 0.3))",
                }}
              >
                {about.image ? (
                  <img
                    src={about.image}
                    alt="Muhammad Taha Naeem"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-heading font-bold text-magenta/70">MT</span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            {about.bio.map((p, i) => (
              <p key={i} className="text-text-secondary text-base md:text-lg leading-relaxed">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <span className="font-heading text-2xl font-bold text-cyan">7th</span>
                <p className="text-text-secondary text-sm">Semester</p>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-magenta">16+</span>
                <p className="text-text-secondary text-sm">Projects</p>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-gold">20+</span>
                <p className="text-text-secondary text-sm">Tech Skills</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
