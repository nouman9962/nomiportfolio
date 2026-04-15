import { useState } from "react";
import { ArrowRight, X, ExternalLink, Github, Layers, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Trading Application",
    subtitle: "Final Year Project",
    description: "Full stack trading web app with Spot Trading, Futures Trading, Order Book, Trading Charts, News Section, and Admin Panel.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Zustand"],
    image: project1,
    features: [
      "Real-time order book with live price updates via WebSocket",
      "Spot & Futures trading with buy/sell order placement",
      "Interactive TradingView-style charts with candlestick patterns",
      "Comprehensive Admin Panel for user & trade management",
      "News section with live crypto/market news integration",
      "User authentication with JWT & role-based access control",
      "Portfolio tracking with profit/loss calculations",
      "Responsive design optimized for desktop & mobile",
    ],
    role: "Full Stack Developer — Built the entire application from frontend to backend, including database design, API development, real-time data handling, and deployment.",
    github: "https://github.com/nouman9962",
    live: "#",
  },
  {
    title: "Chat Application",
    subtitle: "Real-Time Messaging",
    description: "MERN stack chat application featuring real-time messaging, group chats, and chat history with a modern interface.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    image: project2,
    features: [
      "Real-time messaging with Socket.io WebSocket integration",
      "One-on-one and group chat functionality",
      "User authentication & profile management",
      "Message notifications & read receipts",
      "Chat history with search functionality",
      "Typing indicators and online status",
      "Responsive UI with clean Material-inspired design",
      "File/image sharing within chats",
    ],
    role: "Full Stack Developer — Designed and developed the entire chat system including real-time communication, database schema, and responsive UI.",
    github: "https://github.com/nouman9962",
    live: "#",
  },
  {
    title: "Myntra Front-End Clone",
    subtitle: "E-Commerce Clone",
    description: "Myntra-inspired e-commerce web app with responsive UI, RESTful APIs, and Redux Toolkit for state management.",
    tags: ["React.js", "Redux Toolkit", "REST APIs", "MERN", "Tailwind CSS"],
    image: project3,
    features: [
      "Product listing with category filters and sorting",
      "Product detail pages with image galleries",
      "Shopping cart with add/remove & quantity management",
      "Wishlist functionality for saving favorite items",
      "User authentication with login/signup flow",
      "Responsive grid layout matching Myntra's design",
      "Search with autocomplete suggestions",
      "Redux Toolkit for efficient state management",
    ],
    role: "Frontend Developer — Built the entire frontend UI/UX, integrated RESTful APIs, implemented state management with Redux Toolkit.",
    github: "https://github.com/nouman9962",
    live: "#",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <>
      <section id="projects" className="py-24 md:py-32 px-6 md:px-8 relative" ref={ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">My Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-foreground">
              Featured Projects
            </h2>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground">Some recent work I'm proud of</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="glass-card-hover rounded-xl overflow-hidden flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">{project.subtitle}</p>
                  <h3 className="text-lg font-bold mb-2 font-heading text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{tag}</span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">+{project.tags.length - 4}</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    className="text-primary font-semibold flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300 group/btn"
                  >
                    View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-border"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover rounded-t-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center hover:bg-background/80 transition-colors border border-border/50"
                >
                  <X size={18} className="text-foreground" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">{selectedProject.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-3">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.description}</p>
                <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers size={14} className="text-primary" />
                    <span className="font-semibold text-sm text-foreground">My Role</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedProject.role}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-primary" /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm magnetic-btn transition-all">
                    <Github size={14} /> GitHub
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
