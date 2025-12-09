import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "lucide-react";
import { Card } from "@/components/ui/card";

const quickLinks = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function QuickLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="quick-links" 
      className="relative py-12 md:py-16 overflow-hidden"
      ref={ref}
      data-testid="section-quick-links"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-cyan/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 
            className="font-display text-xl md:text-2xl uppercase text-center mb-4"
            data-testid="text-quick-links-title"
          >
            <span className="gradient-text">Quick Links</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className="group cursor-pointer p-4 bg-card/50 border-border hover:border-neon-cyan/50 transition-all duration-300"
                onClick={() => scrollToSection(link.href)}
              >
                <div className="flex items-center gap-2">
                  <Link className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-neon-cyan transition-colors">
                    {link.label}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

