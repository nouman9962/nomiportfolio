import { Mail, Github, Linkedin, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contacts = [
  { icon: Mail, label: "Email", value: "knouman9900@gmail.com", href: "mailto:knouman9900@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92-322-1260372", href: "tel:+923221260372" },
  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-foreground">
            Let's Work Together
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            {contacts.map(({ icon: Icon, label, value, href }, i) => {
              const Wrapper = href ? "a" : "div";
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <Wrapper
                    {...(href ? { href } : {})}
                    className="glass-card-hover rounded-xl p-5 flex items-center gap-4 block"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium">{label}</p>
                      <p className="font-semibold text-sm text-foreground">{value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="glass-card-hover rounded-xl p-8 flex flex-col justify-center items-center text-center border-gradient"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_30px_hsl(190_90%_50%/0.2)]">
              <Send size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-2">Ready to Start?</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Whether it's a full-stack web app or a frontend project — let's build something great.
            </p>
            <a
              href="mailto:knouman9900@gmail.com"
              className="magnetic-btn group px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 text-sm inline-flex items-center gap-2"
            >
              <Sparkles size={14} className="group-hover:animate-spin" />
              Hire Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { icon: Github, href: "https://github.com/nouman9962" },
            { icon: Linkedin, href: "https://linkedin.com/in/m-nouman-khan" },
            { icon: Mail, href: "mailto:knouman9900@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(190_90%_50%/0.15)] transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
