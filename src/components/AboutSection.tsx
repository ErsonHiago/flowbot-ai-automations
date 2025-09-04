import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">FlowBot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa jovem e moderna que abraça novas ideias, utilizando a 
            Inteligência Artificial como um facilitador estratégico e organizacional para equipes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="/lovable-uploads/f6329ec8-9275-4bea-8033-59975e83cf6b.png" 
                alt="Fundador da FlowBot" 
                className="rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-xl shadow-elegant">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Transformar a forma como empresas se comunicam com seus clientes, oferecendo 
              automação de atendimento, gestão de CRM e disparo de campanhas inteligentes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é ajudar empresas a venderem mais e atenderem melhor, 
              com tecnologia que trabalha por elas 24 horas por dia, 7 dias por semana.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <Card className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Equipe Jovem</h4>
                      <p className="text-sm text-muted-foreground">
                        Profissionais modernos focados em inovação
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Novas Ideias</h4>
                      <p className="text-sm text-muted-foreground">
                        Sempre abraçando as últimas tecnologias
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;