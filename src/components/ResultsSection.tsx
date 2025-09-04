import { Card, CardContent } from "@/components/ui/card";

const ResultsSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 gradient-tech opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Números que demonstram o impacto real da nossa automação inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-tech hover:shadow-glow transition-tech tech-hover animate-on-scroll">
            <CardContent className="p-8 text-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 animate-tech-glow">
                10x
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Aumento nas vendas
              </h3>
              <p className="text-white/80 font-medium">
                Empresas que implementaram nossa IA viram crescimento médio de 10x em conversões
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-tech hover:shadow-glow transition-tech tech-hover animate-on-scroll">
            <CardContent className="p-8 text-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 animate-tech-glow">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Atendimento contínuo
              </h3>
              <p className="text-white/80 font-medium">
                Sua equipe virtual trabalhando ininterruptamente para capturar leads
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-tech hover:shadow-glow transition-tech tech-hover animate-on-scroll">
            <CardContent className="p-8 text-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 animate-tech-glow">
                90%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Redução no tempo de resposta
              </h3>
              <p className="text-white/80 font-medium">
                Respostas instantâneas que melhoram significativamente a experiência do cliente
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;