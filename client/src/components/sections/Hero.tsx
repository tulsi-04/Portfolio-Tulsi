import { motion } from "framer-motion";
import { ChevronDown, Download, MessageCircle } from "lucide-react";
import { profileInfo } from "@/lib/data";
import ParticleField from "@/components/three/ParticleField";
import { Button } from "@/components/ui/button";

export default function Hero() {
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
            {profileInfo.title}
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
