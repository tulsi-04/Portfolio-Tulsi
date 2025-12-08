import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const colors = ["neon-cyan", "neon-magenta", "neon-purple", "neon-lime"];
  const accentColor = colors[index % colors.length];

  return (
    <motion.div
      ref={cardRef}
      className="relative group perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      data-testid={`project-card-${project.id}`}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.1 }}
      >
        <Card className="relative p-6 bg-card border-border overflow-hidden transition-all duration-300 group-hover:border-opacity-50">
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsl(var(--${accentColor}) / 0.1) 0%, transparent 70%)`,
            }}
          />
          
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Sparkles className="w-5 h-5 text-neon-lime" />
            </div>
          )}
          
          <div className="relative z-10">
            <div className="h-40 mb-4 rounded-md bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center overflow-hidden">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--${accentColor}) / 0.2), hsl(var(--${accentColor}) / 0.05))`,
                }}
              >
                <span 
                  className="font-display text-2xl uppercase tracking-widest opacity-30"
                  style={{ color: `hsl(var(--${accentColor}))` }}
                >
                  {project.title.slice(0, 2)}
                </span>
              </motion.div>
            </div>
            
            <h3 
              className="font-display text-lg uppercase tracking-wider mb-2"
              style={{ color: `hsl(var(--${accentColor}))` }}
            >
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="font-mono text-xs bg-muted/50 text-muted-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-neon-cyan"
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid={`button-github-${project.id}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-neon-magenta"
                >
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid={`button-live-${project.id}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: `hsl(var(--${accentColor}))`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: isHovered ? [0, 1, 0] : 0,
                  opacity: isHovered ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section 
      id="projects" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-projects"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="font-display text-section uppercase text-center mb-4"
            data-testid="text-projects-title"
          >
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
              data-testid="button-toggle-projects"
            >
              {showAll ? "Show Featured" : "View All Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
