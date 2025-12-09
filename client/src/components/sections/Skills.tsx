import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/lib/data";
import type { Skill } from "@shared/schema";

const colorMap = {
  cyan: "var(--neon-cyan)",
  magenta: "var(--neon-magenta)",
  purple: "var(--neon-purple)",
  lime: "var(--neon-lime)",
};

function SkillBubble({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = colorMap[skill.color];
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`skill-bubble-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
    >
      <motion.div
        className="relative flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer"
        style={{
          background: `linear-gradient(135deg, hsl(${color} / 0.1), hsl(${color} / 0.05))`,
          border: `1px solid hsl(${color} / ${isHovered ? 0.8 : 0.3})`,
          boxShadow: isHovered 
            ? `0 0 20px hsl(${color} / 0.4), 0 0 40px hsl(${color} / 0.2), inset 0 0 20px hsl(${color} / 0.1)`
            : `0 0 10px hsl(${color} / 0.1)`,
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span 
          className="font-display text-sm uppercase tracking-wider text-center mb-3"
          style={{ color: `hsl(${color})` }}
        >
          {skill.name}
        </span>
        
        {skill.description && (
          <p className="text-xs text-muted-foreground text-center mb-3 px-2 leading-relaxed">
            {skill.description}
          </p>
        )}
        
        <div className="relative w-16 h-16">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted/20"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke={`hsl(${color})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${skill.level} ${100 - skill.level}`}
              initial={{ strokeDasharray: "0 100" }}
              animate={{ strokeDasharray: `${skill.level} ${100 - skill.level}` }}
              transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
            />
          </svg>
          <span 
            className="absolute inset-0 flex items-center justify-center font-mono text-sm"
            style={{ color: `hsl(${color})` }}
          >
            {skill.level}%
          </span>
        </div>
        
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, hsl(${color} / 0.15) 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ["frontend", "backend", "tools"];
  const filteredSkills = activeCategory 
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <section 
      id="skills" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-skills"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="font-display text-section uppercase text-center mb-4"
            data-testid="text-skills-title"
          >
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full mb-8" />
          
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider rounded-md border transition-all duration-300 ${
                activeCategory === null
                  ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                  : "border-muted text-muted-foreground hover:border-neon-cyan/50"
              }`}
              data-testid="button-filter-all"
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-sm uppercase tracking-wider rounded-md border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                    : "border-muted text-muted-foreground hover:border-neon-cyan/50"
                }`}
                data-testid={`button-filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <SkillBubble key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
