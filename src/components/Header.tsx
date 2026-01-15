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
          <a href="#inicio" className="text-foreground hover:text-primary transition-smooth font-medium">Início</a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-smooth font-medium">Sobre</a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-smooth font-medium">Serviços</a>
          <a href="#beneficios" className="text-foreground hover:text-primary transition-smooth font-medium">Benefícios</a>
          <a href="#contato" className="text-foreground hover:text-primary transition-smooth font-medium">Contato</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="gradient-primary text-white shadow-elegant hover:shadow-glow hover:shadow-[0_0_40px_rgba(108,155,255,0.6)] transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/558189963940?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20automatizar%20minhas%20vendas!', '_blank')}
          >
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
              <a href="#inicio" className="text-foreground hover:text-primary transition-smooth font-medium">Início</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-smooth font-medium">Sobre</a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-smooth font-medium">Serviços</a>
              <a href="#beneficios" className="text-foreground hover:text-primary transition-smooth font-medium">Benefícios</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-smooth font-medium">Contato</a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button 
                  className="gradient-primary text-white"
                  onClick={() => window.open('https://wa.me/558189963940?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20automatizar%20minhas%20vendas!', '_blank')}
                >
                  Demonstração Gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;