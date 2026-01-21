import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-styled fixed top-0 w-full z-[999]">
      <div className="container mx-auto px-5 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="bg-primary p-2 rounded-lg animate-pulse-glow">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-white/90">
            FlowBot
          </span>
        </div>

        {/* Desktop Navigation - Central */}
        <nav className="hidden lg:flex items-center gap-[18px]">
          <a href="#inicio" className="header-nav-link">Início</a>
          <a href="#servicos" className="header-nav-link">Serviços</a>
          <a href="#beneficios" className="header-nav-link">Benefícios</a>
          <a href="#contato" className="header-nav-link">Contato</a>
        </nav>

        {/* CTA Button - Right */}
        <div className="hidden lg:flex items-center">
          <button 
            className="header-cta-btn"
            onClick={() => window.open('https://wa.link/nipwbr', '_blank')}
          >
            Demonstração Gratuita
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white/90 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[hsl(260,40%,12%/0.98)] backdrop-blur-lg border-b border-white/10 lg:hidden">
            <nav className="flex flex-col p-5 gap-2">
              <a href="#inicio" className="header-nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Início</a>
              <a href="#servicos" className="header-nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#beneficios" className="header-nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
              <a href="#contato" className="header-nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <div className="pt-4 mt-2 border-t border-white/10">
                <button 
                  className="header-cta-btn w-full"
                  onClick={() => window.open('https://wa.link/nipwbr', '_blank')}
                >
                  Demonstração Gratuita
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
