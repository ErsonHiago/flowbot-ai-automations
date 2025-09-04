import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, Megaphone, MessageSquare, BarChart3, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Atendimento por IA",
      description: "Chatbots inteligentes com GPT-4o para atendimento 24/7, respondendo dúvidas e qualificando leads automaticamente.",
      features: ["GPT-4o integrado", "Atendimento humanizado", "Qualificação automática"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Gestão de CRM",
      description: "Suporte completo em CRM Kommo e integrações personalizadas para organizar sua base de clientes.",
      features: ["Kommo CRM", "Integrações customizadas", "Organização completa"]
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Automação de Campanhas",
      description: "Disparos inteligentes em WhatsApp, e-mail, SMS, Instagram, Telegram e LinkedIn.",
      features: ["Multi-plataforma", "Campanhas segmentadas", "Resultados mensuráveis"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em automação e inteligência artificial para transformar 
            seu atendimento e impulsionar suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-smooth animate-on-scroll">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promotional Images */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="animate-on-scroll">
            <img 
              src="/lovable-uploads/dc11bdd4-5f8e-4137-897f-b21cc0c6f03d.png" 
              alt="Métricas de Qualidade FlowBot" 
              className="rounded-xl shadow-card hover:shadow-elegant transition-smooth"
            />
          </div>
          <div className="animate-on-scroll">
            <img 
              src="/lovable-uploads/0ae3722c-45ff-4fdb-afe8-def2f82aa4d9.png" 
              alt="Benefícios FlowBot" 
              className="rounded-xl shadow-card hover:shadow-elegant transition-smooth"
            />
          </div>
          <div className="animate-on-scroll">
            <img 
              src="/lovable-uploads/1a5524f1-b70f-47c7-ba5a-a278aa37ba23.png" 
              alt="Aumente suas Vendas" 
              className="rounded-xl shadow-card hover:shadow-elegant transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;