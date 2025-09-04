import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center gradient-hero text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
            <span className="text-accent font-medium">Automação e Inteligência Artificial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme seu <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Atendimento
            </span> com IA
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto">
            Mais agilidade, organização e eficiência no processo de vendas. 
            Nossa IA trabalha por você 24/7 para vender mais e atender melhor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-secondary shadow-glow hover:shadow-xl transition-smooth"
              onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1%20%F0%9F%91%8B,%20seja%20bem-vindo(a)%20%C3%A0%20FlowBot!%20%F0%9F%9A%80%0AAqui%20voc%C3%AA%20encontra%20solu%C3%A7%C3%B5es%20em%20automa%C3%A7%C3%A3o%20de%20atendimento%20e%20intelig%C3%AAncia%20artificial%20para%20transformar%20suas%20vendas%20e%20agilizar%20o%20contato%20com%20clientes.%0A%0A%E2%9C%85%20Criamos%20funis%20automatizados%20funcionando%2024h/dia%0A%E2%9C%85%20IA%20integrada%20(GPT-4o)%20para%20atender', '_blank')}
            >
              <Bot className="mr-2 h-5 w-5" />
              Quero automatizar meu atendimento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 transition-smooth"
              onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1%20%F0%9F%91%8B,%20seja%20bem-vindo(a)%20%C3%A0%20FlowBot!%20%F0%9F%9A%80%0AAqui%20voc%C3%AA%20encontra%20solu%C3%A7%C3%B5es%20em%20automa%C3%A7%C3%A3o%20de%20atendimento%20e%20intelig%C3%AAncia%20artificial%20para%20transformar%20suas%20vendas%20e%20agilizar%20o%20contato%20com%20clientes.%0A%0A%E2%9C%85%20Criamos%20funis%20automatizados%20funcionando%2024h/dia%0A%E2%9C%85%20IA%20integrada%20(GPT-4o)%20para%20atender', '_blank')}
            >
              Agendar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>GPT-4o Integrado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>24/7 Disponível</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Setup Rápido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;