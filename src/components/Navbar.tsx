import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState<"en" | "te">("en");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "services", "packages", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home", labelTe: "హోమ్" },
    { id: "services", label: "Services", labelTe: "సేవలు" },
    { id: "packages", label: "Packages", labelTe: "ప్యాకేజీలు" },
    { id: "portfolio", label: "Portfolio", labelTe: "పోర్ట్‌ఫోలియో" },
    { id: "contact", label: "Contact", labelTe: "సంప్రదించండి" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xl">
              M
            </div> */}
             
            <div className="w-56 h-20 sm:w-45 sm:h-20 flex items-center justify-center rounded-xl  ">
              <img
                src="/main.png" // <-- replace with your actual logo path
                alt="Mana Product2Brand "
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
{/* 
            <div className="hidden sm:block">
              <div className="font-bold text-lg gradient-text">
                Mana Product2Brand
              </div>
              <div className="text-xs text-muted-foreground">
                Creative Studio
              </div>
            </div> */}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {language === "en" ? link.label : link.labelTe}
              </button>
            ))}
          </div>

          {/* Theme, Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setLanguage(language === "en" ? "te" : "en")}
              className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              {language === "en" ? "తెలుగు" : "EN"}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === link.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {language === "en" ? link.label : link.labelTe}
              </button>
            ))}
            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex-1 px-3 py-2 rounded-lg bg-muted flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setLanguage(language === "en" ? "te" : "en")}
                className="flex-1 px-3 py-2 rounded-lg bg-muted text-sm font-medium"
              >
                {language === "en" ? "తెలుగు" : "EN"}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex-1 btn-primary"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
