import type { Skill, Experience, Project, PersonalityTrait, Education } from "@shared/schema";

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", color: "cyan" },
  { name: "TypeScript", level: 90, category: "frontend", color: "cyan" },
  { name: "Next.js", level: 88, category: "frontend", color: "cyan" },
  { name: "Three.js", level: 85, category: "frontend", color: "magenta" },
  { name: "Tailwind CSS", level: 92, category: "frontend", color: "cyan" },
  { name: "Framer Motion", level: 87, category: "frontend", color: "magenta" },
  { name: "Node.js", level: 88, category: "backend", color: "lime" },
  { name: "PostgreSQL", level: 82, category: "backend", color: "lime" },
  { name: "GraphQL", level: 80, category: "backend", color: "purple" },
  { name: "Docker", level: 78, category: "tools", color: "purple" },
  { name: "Git", level: 90, category: "tools", color: "lime" },
  { name: "Figma", level: 75, category: "tools", color: "magenta" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Leading the development of cutting-edge web applications with React and Three.js. Building immersive user experiences and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Three.js", "WebGL"],
  },
  {
    id: "2",
    company: "Digital Dynamics",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Implemented CI/CD pipelines and improved deployment processes.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "3",
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: "Built the company's flagship product from scratch. Created reusable component libraries and established coding standards for the team.",
    technologies: ["React", "Redux", "Sass", "Jest"],
  },
  {
    id: "4",
    company: "Freelance",
    role: "Web Developer",
    period: "2016 - 2018",
    description: "Delivered custom web solutions for various clients. Specialized in responsive design and performance optimization.",
    technologies: ["JavaScript", "HTML5", "CSS3", "WordPress"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Hotel Management System",
    description: "Currently working on desktop application project 'Hotel Management System' with a team of four members, and I lead the Team.",
    technologies: ["Desktop Application", "Team Leadership", "Project Management"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Neon Dashboard",
    description: "A cyberpunk-themed analytics dashboard with real-time data visualization and 3D charts.",
    technologies: ["React", "Three.js", "D3.js", "WebSocket"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "Virtual Gallery",
    description: "An immersive 3D art gallery experience built with WebGL. Navigate through virtual exhibition spaces.",
    technologies: ["Three.js", "React Three Fiber", "Blender"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "4",
    title: "Synth Wave Player",
    description: "A music player with audio visualization and synthwave aesthetics. Features custom waveform displays.",
    technologies: ["Web Audio API", "Canvas", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "5",
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking with price alerts and portfolio management features.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "6",
    title: "AI Chat Interface",
    description: "A sleek chat interface for AI conversations with streaming responses and code highlighting.",
    technologies: ["React", "OpenAI API", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "7",
    title: "Task Commander",
    description: "A command-line inspired task management app with keyboard shortcuts and dark mode.",
    technologies: ["React", "Zustand", "Framer Motion"],
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "BCA (UG)",
    school: "Arcade Business College",
    period: "2023 - 2026",
    percentage: "NA",
  },
  {
    id: "2",
    degree: "Class 12",
    school: "NN International School",
    period: "2022",
    percentage: "65.8%",
  },
  {
    id: "3",
    degree: "Class 10",
    school: "Chauhan Public School",
    period: "2020",
    percentage: "67.8%",
  },
];

export const personalityTraits: PersonalityTrait[] = [
  {
    title: "Creative Thinker",
    description: "I approach problems with curiosity and imagination, always looking for innovative solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Detail Oriented",
    description: "Every pixel matters. I obsess over the small details that make experiences memorable.",
    icon: "Target",
  },
  {
    title: "Team Player",
    description: "Collaboration fuels my best work. I thrive in environments where ideas flow freely.",
    icon: "Users",
  },
  {
    title: "Lifelong Learner",
    description: "Technology evolves rapidly, and so do I. Always exploring new tools and techniques.",
    icon: "Sparkles",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/tulsi-04", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tulsi-kumari-b807a42a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "Linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/snehaa04.__?igsh=M21xMTRoMDEwMm53", icon: "Instagram" },
];

export const profileInfo = {
  name: "Tulsi Kumari",
  tagline: "Building immersive digital experiences at the intersection of design and technology",
  bio: `Highly motivated Bachelor of Computer Application student, seeking an entry level position in a reputed company. Proven ability to seed projects, quickly adapt to new technologies. Eager to contribute technical skills and commitment to continuous learning to a dynamic team.`,
  email: "tulsibarnwal358@gmail.com",
  phone: "+916204498323",
  location: "Patna/Bihar-800004",
  website: "https://tulsikumari.dev",
  image: "/profile.jpg",
};
