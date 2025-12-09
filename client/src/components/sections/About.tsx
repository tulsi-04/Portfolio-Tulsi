import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Users, Sparkles } from "lucide-react";
import { profileInfo, personalityTraits } from "@/lib/data";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Target,
  Users,
  Sparkles,
};

function FloatingShape({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-about"
    >
      <FloatingShape className="w-32 h-32 bg-neon-cyan blur-3xl -top-16 -left-16" />
      <FloatingShape className="w-48 h-48 bg-neon-magenta blur-3xl top-1/2 -right-24" />
      <FloatingShape className="w-24 h-24 bg-neon-purple blur-3xl bottom-0 left-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="font-display text-section uppercase text-center mb-4"
            data-testid="text-about-title"
          >
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple rounded-lg opacity-20 blur" />
              <Card className="relative p-8 bg-card border-border">
                <div className="space-y-6">
                  {profileInfo.bio.split("\n\n").map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-foreground/80 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      data-testid={`text-bio-${index}`}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  <motion.div
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <a 
                      href={`mailto:${profileInfo.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                      <span className="font-mono text-sm">{profileInfo.email}</span>
                    </a>
                    {profileInfo.phone && (
                      <a 
                        href={`tel:${profileInfo.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-neon-magenta transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-neon-magenta" />
                        <span className="font-mono text-sm">{profileInfo.phone}</span>
                      </a>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
                      <span className="font-mono text-sm">{profileInfo.location}</span>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalityTraits.map((trait, index) => {
              const Icon = iconMap[trait.icon] || Sparkles;
              const colors = ["neon-cyan", "neon-magenta", "neon-purple", "neon-lime"];
              const color = colors[index % colors.length];
              
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card 
                    className="group p-5 bg-card/50 border-border hover:border-opacity-50 transition-all duration-300"
                    data-testid={`card-trait-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-md bg-${color}/10 text-${color}`}>
                        <Icon className="w-5 h-5" style={{ color: `hsl(var(--${color}))` }} />
                      </div>
                      <div>
                        <h3 className="font-display text-sm uppercase tracking-wider mb-1" style={{ color: `hsl(var(--${color}))` }}>
                          {trait.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
