
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FixedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        const navHeight = navRef.current.getBoundingClientRect().height;
        setIsSticky(navTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "py-4 w-full z-50 transition-all duration-300",
        isSticky 
          ? "fixed top-0 bg-white shadow-md dark:bg-gray-900" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-tech-blue">RS</a>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="nav-link"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("experiencia")}
              className="nav-link"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection("escolaridade")}
              className="nav-link"
            >
              Formação
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="nav-link"
            >
              Contato
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleMenuToggle}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden mt-4 transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-60" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-3 py-2">
            <button 
              onClick={() => scrollToSection("home")}
              className="mobile-nav-link"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="mobile-nav-link"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("experiencia")}
              className="mobile-nav-link"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection("escolaridade")}
              className="mobile-nav-link"
            >
              Formação
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="mobile-nav-link"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
