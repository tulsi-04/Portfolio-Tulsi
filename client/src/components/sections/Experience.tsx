import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="experience" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-experience"
    >
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-neon-magenta/5 via-transparent to-neon-cyan/5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="font-display text-section uppercase text-center mb-4"
            data-testid="text-experience-title"
          >
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  data-testid={`experience-item-${exp.id}`}
                >
                  <div className={`hidden md:block md:w-1/2 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                    <motion.span 
                      className="font-mono text-neon-cyan text-sm"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-neon-magenta z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-neon-magenta"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                    />
                  </div>
                  
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pl-8" : "md:pr-8"}`}>
                    <span className="md:hidden font-mono text-neon-cyan text-sm mb-2 block">
                      {exp.period}
                    </span>
                    
                    <Card className="group relative p-6 bg-card/80 border-border hover:border-neon-magenta/50 transition-all duration-300 overflow-visible">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      
                      <div className="relative">
                        <h3 className="font-display text-lg uppercase tracking-wider text-neon-magenta mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-foreground font-medium mb-3">{exp.company}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="font-mono text-xs border-neon-cyan/30 text-neon-cyan/80"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
