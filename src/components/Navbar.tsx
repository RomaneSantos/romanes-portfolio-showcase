
import { useState, useEffect } from 'react';
import { Code, Home, User, Briefcase, BookOpen, Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        // Cast to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold flex items-center gap-2 text-tech-blue"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <Code className="h-6 w-6" />
            <span>RômaneDev</span>
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={cn("nav-link", activeSection === 'home' && "active")}
            >
              <Home className="inline-block mr-1 h-4 w-4" />
              <span>Início</span>
            </a>
            <a 
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('sobre');
              }}
              className={cn("nav-link", activeSection === 'sobre' && "active")}
            >
              <User className="inline-block mr-1 h-4 w-4" />
              <span>Sobre</span>
            </a>
            <a 
              href="#experiencia"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experiencia');
              }}
              className={cn("nav-link", activeSection === 'experiencia' && "active")}
            >
              <Briefcase className="inline-block mr-1 h-4 w-4" />
              <span>Experiência</span>
            </a>
            <a 
              href="#escolaridade"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('escolaridade');
              }}
              className={cn("nav-link", activeSection === 'escolaridade' && "active")}
            >
              <BookOpen className="inline-block mr-1 h-4 w-4" />
              <span>Formação</span>
            </a>
            <a 
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
              className={cn("nav-link", activeSection === 'contato' && "active")}
            >
              <Phone className="inline-block mr-1 h-4 w-4" />
              <span>Contato</span>
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={cn("nav-link flex items-center", activeSection === 'home' && "active")}
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Início</span>
              </a>
              <a 
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sobre');
                }}
                className={cn("nav-link flex items-center", activeSection === 'sobre' && "active")}
              >
                <User className="mr-2 h-5 w-5" />
                <span>Sobre</span>
              </a>
              <a 
                href="#experiencia"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('experiencia');
                }}
                className={cn("nav-link flex items-center", activeSection === 'experiencia' && "active")}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                <span>Experiência</span>
              </a>
              <a 
                href="#escolaridade"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('escolaridade');
                }}
                className={cn("nav-link flex items-center", activeSection === 'escolaridade' && "active")}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                <span>Formação</span>
              </a>
              <a 
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contato');
                }}
                className={cn("nav-link flex items-center", activeSection === 'contato' && "active")}
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Contato</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
