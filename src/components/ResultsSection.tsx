import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";

const StatCard = ({ 
  end, 
  suffix, 
  title, 
  description 
}: { 
  end: number; 
  suffix: string; 
  title: string; 
  description: string;
}) => {
  const { count, ref } = useCountUp({ end, suffix, duration: 1600 });

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-tech hover:shadow-glow transition-tech tech-hover animate-on-scroll">
      <CardContent className="p-8 text-center" ref={ref}>
        <div className="text-6xl md:text-7xl font-bold text-white mb-4 animate-tech-glow">
          {count}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/80 font-medium">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

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
          <StatCard
            end={10}
            suffix="x"
            title="Aumento nas vendas"
            description="Empresas que implementaram nossa IA viram crescimento médio de 10x em conversões"
          />

          <StatCard
            end={24}
            suffix="/7"
            title="Atendimento contínuo"
            description="Sua equipe virtual trabalhando ininterruptamente para capturar leads"
          />

          <StatCard
            end={90}
            suffix="%"
            title="Redução no tempo de resposta"
            description="Respostas instantâneas que melhoram significativamente a experiência do cliente"
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;