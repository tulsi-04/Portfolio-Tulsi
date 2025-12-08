import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import RaveRoom from "@/components/three/RaveRoom";

export default function RaveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="rave" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-rave"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neon-magenta/5 via-neon-purple/10 to-neon-cyan/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 
            className="font-display text-section uppercase mb-4"
            data-testid="text-rave-title"
          >
            <span className="gradient-text">The Rave Room</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An interactive 3D experience showcasing creative coding and WebGL. 
            Drag to rotate, explore the neon geometry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden border border-neon-purple/30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-magenta/10 to-neon-purple/10 animate-border-flow" style={{ backgroundSize: "200% 200%" }} />
          <RaveRoom />
        </motion.div>
        
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
            <div className="font-mono text-neon-cyan text-3xl mb-2">2000+</div>
            <div className="text-muted-foreground text-sm">Particles Rendered</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
            <div className="font-mono text-neon-magenta text-3xl mb-2">60fps</div>
            <div className="text-muted-foreground text-sm">Smooth Performance</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
            <div className="font-mono text-neon-purple text-3xl mb-2">WebGL</div>
            <div className="text-muted-foreground text-sm">Powered by Three.js</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
