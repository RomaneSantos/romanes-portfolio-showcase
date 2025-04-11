import { useEffect } from "react";
import { 
  Code, 
  User, 
  Briefcase, 
  BookOpen, 
  Phone, 
  Mail, 
  Map, 
  Linkedin, 
  Github,
  Code2, 
  FileText,
  Terminal, 
  Database, 
  Settings
} from "lucide-react";
import NavbarWithThemeToggle from "@/components/NavbarWithThemeToggle";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";
import TimelineItem from "@/components/TimelineItem";
import EducationItem from "@/components/EducationItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Index() {
  // Efeito para animar elementos quando entrarem na viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarWithThemeToggle />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-blue/10 to-background dark:from-tech-blue/5 dark:to-background pt-16"
      >
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 space-y-6 order-2 md:order-1">
              <span className="text-tech-blue font-medium inline-block">Olá, eu sou</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                Rômane Santos
                <span className="block text-tech-blue mt-2">Programador Java</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Desenvolvedor Java Backend com 5 anos de experiência em desenvolvimento de sistemas e APIs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-tech-blue hover:bg-tech-blue/90 text-white"
                  onClick={() => {
                    const section = document.getElementById('contato');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Entre em contato
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-tech-blue text-tech-blue hover:bg-tech-blue/10"
                  onClick={() => {
                    const section = document.getElementById('sobre');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-60 h-60 md:w-80 md:h-80 bg-tech-blue rounded-full overflow-hidden border-4 border-white shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Code2 className="w-24 h-24 md:w-32 md:h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 bg-white dark:bg-tech-darkblue dark:text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title opacity-0 animate-on-scroll">Sobre Mim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6 opacity-0 animate-on-scroll">
              <div className="flex items-center gap-3">
                <User className="text-tech-blue h-6 w-6" />
                <h3 className="text-xl font-semibold">Quem sou</h3>
              </div>
              <p className="text-muted-foreground">
                Profissional motivado, com 5 anos de experiência na área de tecnologia, atuando como programador Java backend. 
                Desejo colaborar em um ambiente de desenvolvimento Java onde possa colocar em prática meus conhecimentos, 
                objetivando sempre o benefício e o crescimento da organização e o crescimento profissional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Informações Pessoais</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Mail className="text-tech-blue h-4 w-4" />
                      <span>romanesantos@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Phone className="text-tech-blue h-4 w-4" />
                      <span>(63) 99951-4944</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Map className="text-tech-blue h-4 w-4" />
                      <span>Curitiba - PR</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Linkedin className="text-tech-blue h-4 w-4" />
                      <a 
                        href="https://linkedin.com/in/romanesantos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-tech-blue transition-colors"
                      >
                        linkedin.com/in/romanesantos
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Github className="text-tech-blue h-4 w-4" />
                      <a 
                        href="https://github.com/RomaneSantos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-tech-blue transition-colors"
                      >
                        github.com/RomaneSantos
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Idiomas</h4>
                  <ul className="space-y-2">
                    <li className="text-sm">
                      <span className="font-medium">Português:</span> Nativo
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Inglês:</span> Básico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 opacity-0 animate-on-scroll">
              <div className="flex items-center gap-3">
                <Code className="text-tech-blue h-6 w-6" />
                <h3 className="text-xl font-semibold">Habilidades</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <SkillCard 
                  title="Linguagens" 
                  skills={["Java", "C/C++", "JavaScript/TypeScript", "SQL", "PHP", "HTML/CSS"]}
                />
                <SkillCard 
                  title="Frameworks/Bibliotecas" 
                  skills={["Spring/Spring Boot", "JPA/Hibernate/JDBC", "Jackson/Gson/JAXB", "Thymeleaf", "JUnit/DBUnit/JMock", "JFX/Swing", "React/Angular/Vue", "Spring MVC/Web/WebFlux", "jQuery"]}
                />
                <SkillCard 
                  title="Outros" 
                  skills={["Rest/RestFull", "Linux/AWS", "Git/Github/Azure", "VS Code/IntelliJ", "DBeaver/MySQL Workbench", "Maven/Gradle", "JConsole/VisualVM/JProfiler"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20 bg-gray-50 dark:bg-tech-gray dark:text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title opacity-0 animate-on-scroll">Experiência Profissional</h2>
          
          <div className="mt-12 opacity-0 animate-on-scroll">
            <TimelineItem 
              title="Programador Java Backend Pleno"
              company="RP Info Sistemas"
              period="12/2021 - Atualmente"
              location="Curitiba, PR"
              activities={[
                "Programação Java Backend",
                "Desenvolvimento de APIs",
                "Manipulação de dados",
                "Criação de Páginas",
                "Profiling",
                "Conciliação de Movimentos Financeiros"
              ]}
            />
            
            <TimelineItem 
              title="Desenvolvedor Web"
              company="ORP TECNOLOGIA"
              period="06/2021 - 11/2021"
              location="Palmas, TO"
              activities={[
                "Outsourcing de sites",
                "Desenvolvedor Fullstack",
                "Manutenção de sites e sistemas"
              ]}
            />
            
            <TimelineItem 
              title="Técnico em TI"
              company="Corregedoria Geral"
              period="11/2020 - 05/2021"
              location="Palmas, TO"
              activities={[
                "Suporte Técnico em Hardware/Software"
              ]}
            />
            
            <TimelineItem 
              title="Desenvolvedor Web"
              company="Vultech"
              period="06/2020 - 06/2022"
              location="Palmas, TO"
              activities={[
                "Desenvolvimento de Páginas Web",
                "Desenvolvimento de APIs com Spring/Spring Boot"
              ]}
            />
            
            <TimelineItem 
              title="Desenvolvedor Web"
              company="Ever By Nature"
              period="06/2020 - 01/2021"
              location="Palmas, TO"
              activities={[
                "Otimização/Alteração/Criação de páginas web",
                "Configuração de ambiente de desenvolvimento",
                "Configuração de Serviços de Domínio, SSL e Hospedagem"
              ]}
            />
            
            <TimelineItem 
              title="Estagiário"
              company="Instituto Nacional de Aprendizagem Rural"
              period="11/2018 - 10/2020"
              location="Palmas, TO"
              activities={[
                "Suporte Técnico em Hardware/Software",
                "Análise de dados internos",
                "Desenvolvimento de Sistemas",
                "Automação de planilhas"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Escolaridade Section */}
      <section id="escolaridade" className="py-20 bg-white dark:bg-tech-darkblue dark:text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title opacity-0 animate-on-scroll">Formação Acadêmica</h2>
          
          <div className="mt-12 opacity-0 animate-on-scroll">
            <EducationItem 
              degree="Bacharel em Ciência da Computação"
              institution="Universidade Federal do Tocantins"
              period="2018 - 2024"
              location="Palmas, TO"
              content={[
                "Lógica de Programação de Computadores",
                "Redes de Computadores",
                "Processamento de Imagens",
                "Análise de dados",
                "Inteligência Artificial",
                "Criação de Banco de Dados",
                "Projeto de Banco de Dados",
                "Sistemas Operacionais",
                "Análise de Sistemas e Algoritmos",
                "Engenharia de Software",
                "Lógica Matemática",
                "Álgebra Linear",
                "Cálculo Numérico",
                "Física Teórica"
              ]}
            />
            
            <EducationItem 
              degree="Técnico em Redes de Computadores"
              institution="Colégio da Polícia Militar do Tocantins"
              period="2015 - 2017"
              location="Palmas, TO"
              content={[
                "Programação de computadores",
                "Análise e Manutenção de Sistemas",
                "Identificação de Redes",
                "Configuração de Redes de Computadores",
                "Liderar Projetos de Desenvolvimento",
                "Comunicação",
                "Metodologias Ágeis"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-tech-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={cn(
            "section-title text-white opacity-0 animate-on-scroll",
            "after:bg-white"
          )}>Contato</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="opacity-0 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6">Vamos Conversar</h3>
              <p className="text-tech-lightgray mb-8">
                Estou sempre aberto a novas oportunidades e desafios. 
                Se você está procurando um desenvolvedor Java backend com experiência e paixão por criar soluções eficientes, entre em contato.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:romanesantos@gmail.com" 
                  className="contact-link"
                >
                  <Mail className="h-5 w-5 mr-3 text-tech-lightblue" />
                  <span>romanesantos@gmail.com</span>
                </a>
                <a 
                  href="tel:+5563999514944" 
                  className="contact-link"
                >
                  <Phone className="h-5 w-5 mr-3 text-tech-lightblue" />
                  <span>(63) 99951-4944</span>
                </a>
                <div className="contact-link">
                  <Map className="h-5 w-5 mr-3 text-tech-lightblue" />
                  <span>Rua Iapo, 371 - Rebouças, Curitiba - PR (80215-020)</span>
                </div>
                <a 
                  href="https://linkedin.com/in/romanesantos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-tech-lightblue" />
                  <span>linkedin.com/in/romanesantos</span>
                </a>
                <a 
                  href="https://github.com/RomaneSantos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Github className="h-5 w-5 mr-3 text-tech-lightblue" />
                  <span>github.com/RomaneSantos</span>
                </a>
              </div>
            </div>
            
            <div className="bg-tech-gray p-8 rounded-lg shadow-lg opacity-0 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6">Áreas de Atuação</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Terminal className="h-6 w-6 mr-4 text-tech-lightblue mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Desenvolvimento Backend</h4>
                    <p className="text-sm text-tech-lightgray">
                      Especializado em desenvolvimento de aplicações backend robustas utilizando Java e o ecossistema Spring.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Database className="h-6 w-6 mr-4 text-tech-lightblue mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Banco de Dados</h4>
                    <p className="text-sm text-tech-lightgray">
                      Experiência em modelagem, criação e otimização de bancos de dados relacionais e não-relacionais.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText className="h-6 w-6 mr-4 text-tech-lightblue mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">APIs RESTful</h4>
                    <p className="text-sm text-tech-lightgray">
                      Desenvolvimento de APIs RESTful seguindo as melhores práticas e padrões de projeto.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Settings className="h-6 w-6 mr-4 text-tech-lightblue mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Integração de Sistemas</h4>
                    <p className="text-sm text-tech-lightgray">
                      Habilidade em integrar diferentes sistemas e serviços para criar soluções completas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white"
                  onClick={() => window.location.href = "mailto:romanesantos@gmail.com"}
                >
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
