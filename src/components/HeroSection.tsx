import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import photo1 from "@/assets/photo-1.png";
import photo2 from "@/assets/photo-2.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] animate-morph" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[130px] animate-morph" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 border border-primary/5 rounded-full animate-rotate-slow" />
        <div className="absolute inset-12 border border-primary/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '45s' }} />
        <div className="absolute inset-24 border border-accent/5 rounded-full animate-rotate-slow" style={{ animationDuration: '60s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-16 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            className="lg:w-1/2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary tracking-wide">Available for work</span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 font-heading text-foreground">
              I build{" "}
              <span className="gradient-text">digital</span>
              <br />
              experiences
            </motion.h1>

            <motion.p variants={item} className="text-lg leading-relaxed mb-8 text-muted-foreground max-w-lg">
              Full Stack MERN Developer crafting scalable web applications with clean architecture,
              intuitive interfaces, and real-time capabilities.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="magnetic-btn group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="magnetic-btn px-7 py-3.5 border border-border text-foreground font-semibold rounded-full hover:bg-secondary hover:border-muted transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="px-7 py-3.5 border border-border text-muted-foreground font-medium rounded-full hover:text-foreground hover:border-muted transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} /> Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/nouman9962", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/m-nouman-khan", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:knouman9900@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(190_90%_50%/0.15)] transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-border" />
              <span className="text-xs text-muted-foreground">M Nouman Khan</span>
            </motion.div>
          </motion.div>

          {/* Photo composition */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing background behind image */}
              <div className="absolute inset-0 hero-bg-gradient scale-125 animate-morph" />

              {/* Decorative rings */}
              <div className="absolute -top-8 -right-8 w-full h-full border border-primary/10 rounded-3xl rotate-6" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent/10 rounded-3xl -rotate-3" />

              {/* Main photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden animate-pulse-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-10" />
                <img
                  src={photo1}
                  alt="M Nouman Khan"
                  className="w-full h-auto object-cover hero-image-glow"
                  width={800}
                  height={800}
                />
              </div>

              {/* Secondary photo - floating */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-2xl border-2 border-background/80 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
                <img
                  src={photo2}
                  alt="M Nouman Khan - Professional"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-20 h-20 z-0 opacity-30">
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  ))}
                </div>
              </div>

              {/* Stats badge */}
              <motion.div
                className="absolute -right-4 top-1/3 z-20 glass-card rounded-xl px-4 py-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-xs text-muted-foreground">Projects</p>
                <p className="text-xl font-bold font-heading gradient-text">10+</p>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -left-2 top-8 z-20 glass-card rounded-xl px-4 py-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-xl font-bold font-heading gradient-text">2+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
