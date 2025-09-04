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
          <Button 
            className="gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth"
            onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1%20%F0%9F%91%8B,%20seja%20bem-vindo(a)%20%C3%A0%20FlowBot!%20%F0%9F%9A%80%0AAqui%20voc%C3%AA%20encontra%20solu%C3%A7%C3%B5es%20em%20automa%C3%A7%C3%A3o%20de%20atendimento%20e%20intelig%C3%AAncia%20artificial%20para%20transformar%20suas%20vendas%20e%20agilizar%20o%20contato%20com%20clientes.%0A%0A%E2%9C%85%20Criamos%20funis%20automatizados%20funcionando%2024h/dia%0A%E2%9C%85%20IA%20integrada%20(GPT-4o)%20para%20atender', '_blank')}
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
              <a href="#inicio" className="hover:text-primary transition-smooth">Início</a>
              <a href="#sobre" className="hover:text-primary transition-smooth">Sobre</a>
              <a href="#servicos" className="hover:text-primary transition-smooth">Serviços</a>
              <a href="#beneficios" className="hover:text-primary transition-smooth">Benefícios</a>
              <a href="#contato" className="hover:text-primary transition-smooth">Contato</a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline">Login</Button>
                <Button 
                  className="gradient-primary text-white"
                  onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1%20%F0%9F%91%8B,%20seja%20bem-vindo(a)%20%C3%A0%20FlowBot!%20%F0%9F%9A%80%0AAqui%20voc%C3%AA%20encontra%20solu%C3%A7%C3%B5es%20em%20automa%C3%A7%C3%A3o%20de%20atendimento%20e%20intelig%C3%AAncia%20artificial%20para%20transformar%20suas%20vendas%20e%20agilizar%20o%20contato%20com%20clientes.%0A%0A%E2%9C%85%20Criamos%20funis%20automatizados%20funcionando%2024h/dia%0A%E2%9C%85%20IA%20integrada%20(GPT-4o)%20para%20atender', '_blank')}
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