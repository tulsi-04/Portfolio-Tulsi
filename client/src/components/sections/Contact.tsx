import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone, Globe, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { socialLinks, profileInfo } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
      data-testid="section-contact"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="font-display text-section uppercase text-center mb-4"
            data-testid="text-contact-title"
          >
            <span className="gradient-text">Contact Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg text-center max-w-xl mx-auto">
            Let's discuss new project, creative ideas, or opportunities to be part of something amazing that how we can work together to bring your ideas to real world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative p-8 bg-card border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-magenta/5" />
              
              {isSuccess ? (
                <motion.div
                  className="relative flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    <CheckCircle className="w-20 h-20 text-neon-lime mb-4" />
                  </motion.div>
                  <h3 className="font-display text-xl uppercase tracking-wider text-neon-lime mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your name"
                              className="bg-transparent border-0 border-b border-muted rounded-none focus-visible:ring-0 focus-visible:border-neon-cyan transition-colors"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              className="bg-transparent border-0 border-b border-muted rounded-none focus-visible:ring-0 focus-visible:border-neon-cyan transition-colors"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell me about your project..."
                              rows={5}
                              className="bg-transparent border-0 border-b border-muted rounded-none focus-visible:ring-0 focus-visible:border-neon-cyan transition-colors resize-none"
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="group relative w-full bg-transparent border-2 border-neon-cyan text-neon-cyan font-display uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-neon-cyan/10 hover:shadow-neon-cyan disabled:opacity-50"
                      data-testid="button-submit"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {mutation.isPending ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-neon-cyan border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-display text-sm uppercase tracking-wider text-neon-magenta mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${profileInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm">{profileInfo.email}</span>
                </motion.a>
                <motion.a
                  href={`tel:${profileInfo.phone?.replace(/\s/g, '') || ''}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon-magenta transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-neon-magenta group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm">{profileInfo.phone}</span>
                </motion.a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-neon-purple" />
                  <span className="font-mono text-sm">Response Time: Within 24 hours</span>
                </div>
                {profileInfo.website && (
                  <motion.a
                    href={profileInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-neon-purple transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Globe className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-sm">{profileInfo.website.replace(/^https?:\/\//, '')}</span>
                  </motion.a>
                )}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-neon-lime" />
                  <span className="font-mono text-sm">{profileInfo.location}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-display text-sm uppercase tracking-wider text-neon-purple mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon] || Github;
                  const colors = ["neon-cyan", "neon-magenta", "neon-purple", "neon-lime"];
                  const color = colors[index % colors.length];
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-md border border-muted text-muted-foreground transition-all duration-300`}
                      style={{
                        borderColor: `hsl(var(--${color}) / 0.3)`,
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: `hsl(var(--${color}))`,
                        boxShadow: `0 0 15px hsl(var(--${color}) / 0.5)`,
                      }}
                      whileTap={{ scale: 0.95 }}
                      data-testid={`link-social-${link.name.toLowerCase()}`}
                    >
                      <Icon className="w-5 h-5" style={{ color: `hsl(var(--${color}))` }} />
                    </motion.a>
                  );
                })}
                <motion.a
                  href="https://github.com/tulsi-04/Portfolio-Tulsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-md border border-muted text-muted-foreground transition-all duration-300"
                  style={{
                    borderColor: `hsl(var(--neon-cyan) / 0.3)`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: `hsl(var(--neon-cyan))`,
                    boxShadow: `0 0 15px hsl(var(--neon-cyan) / 0.5)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="link-social-github-repo"
                >
                  <Github className="w-5 h-5" style={{ color: `hsl(var(--neon-cyan))` }} />
                </motion.a>
              </div>
              <p className="text-sm text-muted-foreground font-mono">
                Available for Freelancing and Collaborations.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-neon-cyan/10 via-neon-magenta/10 to-neon-purple/10 border-neon-purple/30">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                <span className="text-neon-cyan">{"// "}</span>
                Open to freelance projects, collaborations, and interesting opportunities. 
                Let's build something amazing together!
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
