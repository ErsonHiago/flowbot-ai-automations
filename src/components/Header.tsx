import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg animate-pulse-glow">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            FlowBot
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="hover:text-primary transition-smooth">Início</a>
          <a href="#sobre" className="hover:text-primary transition-smooth">Sobre</a>
          <a href="#servicos" className="hover:text-primary transition-smooth">Serviços</a>
          <a href="#beneficios" className="hover:text-primary transition-smooth">Benefícios</a>
          <a href="#contato" className="hover:text-primary transition-smooth">Contato</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
            Login
          </Button>
          <Button className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth">
            Demonstração Gratuita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#inicio" className="hover:text-primary transition-smooth">Início</a>
              <a href="#sobre" className="hover:text-primary transition-smooth">Sobre</a>
              <a href="#servicos" className="hover:text-primary transition-smooth">Serviços</a>
              <a href="#beneficios" className="hover:text-primary transition-smooth">Benefícios</a>
              <a href="#contato" className="hover:text-primary transition-smooth">Contato</a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline">Login</Button>
                <Button className="gradient-primary text-white">Demonstração Gratuita</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;