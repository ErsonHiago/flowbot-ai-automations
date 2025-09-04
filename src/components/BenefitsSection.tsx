import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Target, BarChart, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Mais Vendas",
      description: "Aumente suas conversões com atendimento inteligente que nunca dorme."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Menos Retrabalho",
      description: "Automação reduz tarefas repetitivas e organiza processos automaticamente."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Mais Agilidade",
      description: "Respostas instantâneas e processos otimizados para máxima eficiência."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atendimento 24/7",
      description: "Seus clientes são atendidos a qualquer hora, sem interrupções."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Leads Qualificados",
      description: "IA identifica e prioriza leads com maior potencial de conversão."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Métricas Precisas",
      description: "Análise completa de resultados com dados precisos e acionáveis."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-primary">FlowBot</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme seu negócio com ganhos reais e mensuráveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-smooth animate-on-scroll group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow transition-smooth">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Section */}
        <div className="mt-20 text-center">
          <div className="gradient-hero rounded-2xl p-12 text-white animate-on-scroll">
            <h3 className="text-3xl font-bold mb-8">Resultados Comprovados</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10x</div>
                <p className="text-white/80">Aumento nas vendas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-white/80">Atendimento contínuo</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">90%</div>
                <p className="text-white/80">Redução no tempo de resposta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;