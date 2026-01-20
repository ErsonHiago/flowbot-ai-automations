import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center gradient-hero text-white relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="glow-orb glow-orb-primary w-96 h-96 top-10 -left-20" style={{ animationDelay: '0s' }}></div>
        <div className="glow-orb glow-orb-secondary w-80 h-80 bottom-10 right-10" style={{ animationDelay: '2s' }}></div>
        <div className="glow-orb glow-orb-primary w-64 h-64 top-1/3 right-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="glow-orb glow-orb-secondary w-48 h-48 bottom-1/3 left-1/4" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
            <span className="text-white font-semibold glass px-4 py-2 rounded-full">Automação e Inteligência Artificial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme seu <br />
            <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent animate-neon-pulse">
              Atendimento
            </span> com IA
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Mais agilidade, organização e eficiência no processo de vendas. 
            Nossa IA trabalha por você 24/7 para vender mais e atender melhor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary font-semibold hover:bg-white/90 hover:text-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-tech-glow"
              onClick={() => window.open('https://wa.link/nipwbr', '_blank')}
            >
              <Bot className="mr-2 h-5 w-5" />
              Quero automatizar meu atendimento
            </Button>
            <Button 
              size="lg" 
              className="bg-white/25 backdrop-blur-md border-2 border-white/50 text-white font-semibold hover:bg-white/35 hover:border-white/70 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.link/nipwbr', '_blank')}
            >
              Agendar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>GPT-4o Integrado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>24/7 Disponível</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Setup Rápido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;