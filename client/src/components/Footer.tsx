import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Instagram } from "lucide-react";
import { profileInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
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
              className="flex items-center gap-3"
            >
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon] || Github;
                const colors = ["neon-cyan", "neon-magenta", "neon-purple"];
                const color = colors[index % colors.length];
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full border border-muted text-muted-foreground transition-all duration-300`}
                    style={{
                      borderColor: `hsl(var(--${color}) / 0.3)`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: `hsl(var(--${color}))`,
                      boxShadow: `0 0 15px hsl(var(--${color}) / 0.5)`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" style={{ color: `hsl(var(--${color}))` }} />
                  </motion.a>
                );
              })}
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
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-muted-foreground text-sm font-mono text-center"
        >
          ThankYou for Visiting my page
        </motion.div>
        </div>
      </div>
    </footer>
  );
}
