import { Monitor, Server, Database, Wrench, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { category: "Languages", icon: Globe, items: ["HTML", "CSS", "JavaScript", "TypeScript", "C++"] },
  { category: "Frontend", icon: Monitor, items: ["React.js", "Redux Toolkit", "Zustand", "Bootstrap", "Tailwind CSS", "Material UI"] },
  { category: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
  { category: "Database", icon: Database, items: ["MongoDB", "Mongoose", "Firebase"] },
  { category: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva", "Vercel", "Netlify"] },
  { category: "Concepts", icon: Brain, items: ["UI/UX Design", "Component Architecture", "Responsive Design", "State Management", "Auth & Authorization"] },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-8 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">What I Use</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-foreground">
            Technical Skills
          </h2>
          <div className="section-divider" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              className="glass-card-hover rounded-xl p-6 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(190_90%_50%/0.12)] transition-all duration-500">
                  <skill.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="skill-tag text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:text-primary transition-colors duration-300 cursor-default border border-transparent hover:border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
