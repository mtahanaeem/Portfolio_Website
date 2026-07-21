import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personal } from "../data/content";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm font-body">
          &copy; {new Date().getFullYear()} {personal.name}. Built with insight, not templates.
        </p>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-magenta/20 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
