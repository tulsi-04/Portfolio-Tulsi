import { motion } from "framer-motion";
import { ChevronDown, Download, MessageCircle, Github, Linkedin, Instagram } from "lucide-react";
import { profileInfo, socialLinks } from "@/lib/data";
import ParticleField from "@/components/three/ParticleField";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Instagram,
};

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <ParticleField />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple rounded-full opacity-75 blur-lg animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neon-cyan/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                {!imageError ? (
                  <img 
                    src={profileInfo.image} 
                    alt={profileInfo.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 text-neon-cyan text-2xl md:text-3xl font-display font-bold">
                    {profileInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.p 
            className="font-mono text-neon-cyan text-sm md:text-base tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            data-testid="text-greeting"
          >
            {"// HELLO WORLD"}
          </motion.p>
          
          <h1 
            className="font-display font-bold text-hero uppercase mb-4 relative glitch-text"
            data-text={profileInfo.name}
            data-testid="text-name"
          >
            <span className="gradient-text">{profileInfo.name}</span>
          </h1>
          
          <motion.h2 
            className="font-display text-2xl md:text-4xl text-neon-magenta uppercase tracking-wider mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            data-testid="text-title"
          >
            Creative Developer
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            data-testid="text-tagline"
          >
            {profileInfo.tagline}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button
              onClick={scrollToProjects}
              className="group relative px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan font-display uppercase tracking-wider rounded-md overflow-hidden transition-all duration-300 hover:bg-neon-cyan/10 hover:shadow-neon-cyan"
              variant="outline"
              data-testid="button-view-work"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <Download className="w-4 h-4" />
              </span>
            </Button>
            
            <Button
              onClick={scrollToContact}
              className="group relative px-8 py-3 bg-neon-magenta/20 border-2 border-neon-magenta text-neon-magenta font-display uppercase tracking-wider rounded-md overflow-hidden transition-all duration-300 hover:bg-neon-magenta/30 hover:shadow-neon-magenta"
              variant="outline"
              data-testid="button-contact"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <MessageCircle className="w-4 h-4" />
              </span>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
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
                  className={`p-3 rounded-full border-2 border-muted text-muted-foreground transition-all duration-300 hover:scale-110`}
                  style={{
                    borderColor: `hsl(var(--${color}) / 0.3)`,
                  }}
                  whileHover={{
                    borderColor: `hsl(var(--${color}))`,
                    boxShadow: `0 0 20px hsl(var(--${color}) / 0.5)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`social-link-${link.name.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" style={{ color: `hsl(var(--${color}))` }} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-neon-cyan/50" />
      </motion.div>
    </section>
  );
}
