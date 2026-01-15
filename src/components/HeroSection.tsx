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
            <span className="text-white font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">Automação e Inteligência Artificial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme seu <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
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
              onClick={() => window.open('https://wa.me/5581989963940?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20automatizar%20meu%20neg%C3%B3cio!', '_blank')}
            >
              <Bot className="mr-2 h-5 w-5" />
              Quero automatizar meu atendimento
            </Button>
            <Button 
              size="lg" 
              className="bg-white/25 backdrop-blur-md border-2 border-white/50 text-white font-semibold hover:bg-white/35 hover:border-white/70 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/5581989963940?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20automatizar%20meu%20neg%C3%B3cio!', '_blank')}
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