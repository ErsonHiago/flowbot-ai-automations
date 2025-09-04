import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text">Erson Hiago</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Sou fundador da FlowBot, uma empresa que vem se consolidando como referência 
            em automação de atendimento e inteligência artificial no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-on-scroll flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/f6329ec8-9275-4bea-8033-59975e83cf6b.png" 
                alt="Fundador da FlowBot" 
                className="rounded-2xl shadow-card w-full max-w-md"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-xl shadow-elegant">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Sobre Mim</h3>
            <p className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
              Ao longo da minha trajetória, já participei da implementação de soluções para diferentes 
              setores, ajudando empresas a transformarem seus processos comerciais com tecnologia de ponta.
            </p>
            <p className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
              Minha experiência abrange desde estratégias de CRM e análise de dados, até a criação de 
              chatbots avançados integrados com GPT-4, sistemas que aumentam a eficiência das equipes 
              e geram crescimento real para os negócios.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed">
              Na FlowBot, lidero um time que acredita no futuro da automação, entregando projetos 
              personalizados e de alto impacto. Nosso objetivo é simples: tornar cada cliente mais 
              competitivo, moderno e preparado para o futuro digital.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <Card className="gradient-card shadow-card hover:shadow-tech transition-tech tech-hover">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 gradient-tech opacity-20"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-primary/20 p-3 rounded-lg shadow-tech">
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

              <Card className="gradient-card shadow-card hover:shadow-tech transition-tech tech-hover">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 gradient-tech opacity-20"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-primary/20 p-3 rounded-lg shadow-tech">
                      <Lightbulb className="h-6 w-6 text-primary" />
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