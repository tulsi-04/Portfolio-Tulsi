import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="certificates" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-certificates"
    >
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-neon-lime/5 via-transparent to-neon-cyan/5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="font-display text-section uppercase text-center mb-4"
            data-testid="text-certificates-title"
          >
            <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative p-6 bg-card/80 border-border hover:border-neon-lime/50 transition-all duration-300 overflow-visible">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-neon-lime/10 text-neon-lime">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg uppercase tracking-wider text-neon-lime mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-foreground font-medium">{cert.issuer}</p>
                        {cert.period && (
                          <Badge 
                            variant="outline"
                            className="font-mono text-xs border-neon-cyan/30 text-neon-cyan/80 mt-2"
                          >
                            {cert.period}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

