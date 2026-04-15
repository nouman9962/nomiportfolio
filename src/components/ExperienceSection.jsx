import { Briefcase, Award, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    date: "2024 — Present",
    badge: "Professional",
    title: "Full Stack Developer",
    desc: "Developed a modern trading web application using the MERN stack. Implemented real-time order book, interactive charts, trading dashboards, and an admin panel.",
    tags: ["React.js", "Node.js", "MongoDB", "Redux"],
  },
  {
    type: "work",
    icon: Briefcase,
    date: "2023 — Present",
    badge: "Freelance",
    title: "Frontend Developer",
    desc: "Built responsive websites and web applications for clients using React.js, Tailwind CSS, and modern JavaScript. Delivered clean UI/UX with a focus on performance.",
  },
  {
    type: "education",
    icon: GraduationCap,
    date: "2022 — July 2026",
    badge: "Education",
    title: "BS Computer Science",
    subtitle: "University of Mianwali",
    extra: "CGPA: 3.05 / 4.00",
    desc: "Data Structures & Algorithms, OOP, Database Systems, Software Engineering, Web Development, Computer Networks.",
  },
  {
    type: "award",
    icon: Award,
    date: "2025 — 2026",
    badge: "Achievements",
    title: "Awards & Certificates",
    list: [
      "CODEX 3.0 — Namal University · Runner-Up",
      "React.js for Beginners — Simplilearn",
      "Vibe Coding Course — Simplilearn",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-8 relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">My Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-foreground">
            Experience & Education
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 group"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              >
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_hsl(190_90%_50%/0.15)] transition-all duration-400">
                    <item.icon size={16} className="text-primary" />
                  </div>
                </div>
                <div className="glass-card-hover rounded-xl p-5 flex-1 mb-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">{item.badge}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={10} /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-foreground">{item.title}</h3>
                  {item.subtitle && <p className="text-sm text-muted-foreground">{item.subtitle}</p>}
                  {item.extra && <p className="text-sm font-medium text-foreground mt-0.5">{item.extra}</p>}
                  {item.desc && <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.desc}</p>}
                  {item.list && (
                    <ul className="mt-2 space-y-1.5">
                      {item.list.map((l, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />{l}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
