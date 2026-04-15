import { Code2, Palette, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Maintainable & scalable architecture" },
  { icon: Palette, label: "UI/UX Focus", desc: "Beautiful, user-centric design" },
  { icon: Zap, label: "Performance", desc: "Fast, optimized applications" },
  { icon: Users, label: "Team Player", desc: "Collaborative & communicative" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-foreground">
            About Me
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-4">
            Full Stack MERN Developer based in Islamabad, Pakistan. Currently completing
            my BS in Computer Science at the University of Mianwali.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            I focus on developing efficient APIs, reliable systems, and intuitive interfaces.
            Runner-Up at the CODEX 3.0 Competitive Programming contest at Namal University.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="glass-card-hover rounded-xl p-6 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(190_90%_50%/0.15)] transition-all duration-500">
                <h.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm font-heading text-foreground mb-1">{h.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
