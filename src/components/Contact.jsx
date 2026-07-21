import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { personal } from "../data/content";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, GlobeIcon } from "./icons";

export default function Contact() {
  const [ref, inView] = useInView();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const formData = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan/5 blur-[120px] -z-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12"
        >
          <span className="text-cyan">/</span> contact
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              I'm always open to discussing data science opportunities, collaborations, or interesting projects.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-magenta/20 transition-colors">
                  <Mail size={16} className="text-magenta" />
                </div>
                <span className="text-sm font-body">{personal.email}</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={16} className="text-cyan" />
                </div>
                <span className="text-sm font-body">{personal.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-magenta/20 transition-colors text-text-secondary hover:text-text-primary" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan/20 transition-colors text-text-secondary hover:text-text-primary" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={personal.socials.portfolio} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors text-text-secondary hover:text-text-primary" aria-label="Portfolio">
                <GlobeIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="bot-field" style={{ display: "none" }} />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autocomplete="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-text-secondary/50 text-sm font-body focus:outline-none focus:border-magenta/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autocomplete="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-text-secondary/50 text-sm font-body focus:outline-none focus:border-magenta/50 transition-colors"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              autocomplete="off"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-text-secondary/50 text-sm font-body focus:outline-none focus:border-magenta/50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan text-navy font-semibold font-body text-sm hover:bg-cyan/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>Sending...</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-400"
              >
                <CheckCircle size={15} /> Message sent — I'll get back to you soon!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400"
              >
                <AlertCircle size={15} /> Something went wrong. Please try emailing me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
