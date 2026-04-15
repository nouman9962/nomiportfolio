import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-bold font-heading gradient-text text-sm">Nouman.</span>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          &copy; {new Date().getFullYear()} M Nouman Khan — Built with <Heart size={12} className="text-primary" /> & React
        </p>
        <div className="flex gap-6 text-xs">
          {["About", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
