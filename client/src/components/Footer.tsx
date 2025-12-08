import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { profileInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <span className="font-display text-lg uppercase tracking-wider text-neon-cyan">
              {profileInfo.name.split(" ")[0]}
              <span className="text-neon-magenta">.</span>
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-neon-magenta animate-pulse" />
            <span>and lots of</span>
            <span className="font-mono text-neon-cyan">{"<code/>"}</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm text-muted-foreground"
          >
            <span className="text-neon-purple">&copy;</span> {currentYear} {profileInfo.name}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
