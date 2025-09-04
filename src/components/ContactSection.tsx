import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vamos conversar sobre seu <span className="text-primary">projeto</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como a FlowBot pode transformar 
            seu atendimento e impulsionar suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card shadow-card animate-on-scroll">
            <CardHeader>
              <CardTitle className="text-2xl">Solicite uma demonstração</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Empresa</label>
                  <Input placeholder="Nome da empresa" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">E-mail</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Telefone</label>
                <Input placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Como podemos ajudar?</label>
                <Textarea placeholder="Conte-nos sobre seu projeto e objetivos..." />
              </div>
              <Button 
                className="w-full gradient-primary text-white shadow-elegant hover:shadow-glow transition-smooth"
                onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1%20%F0%9F%91%8B,%20seja%20bem-vindo(a)%20%C3%A0%20FlowBot!%20%F0%9F%9A%80%0AAqui%20voc%C3%AA%20encontra%20solu%C3%A7%C3%B5es%20em%20automa%C3%A7%C3%A3o%20de%20atendimento%20e%20intelig%C3%AAncia%20artificial%20para%20transformar%20suas%20vendas%20e%20agilizar%20o%20contato%20com%20clientes.%0A%0A%E2%9C%85%20Criamos%20funis%20automatizados%20funcionando%2024h/dia%0A%E2%9C%85%20IA%20integrada%20(GPT-4o)%20para%20atender', '_blank')}
              >
                Quero uma demonstração gratuita
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">Fale conosco agora</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-accent hover:text-accent-foreground transition-smooth"
                  onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1%20%F0%9F%91%8B,%20seja%20bem-vindo(a)%20%C3%A0%20FlowBot!%20%F0%9F%9A%80%0AAqui%20voc%C3%AA%20encontra%20solu%C3%A7%C3%B5es%20em%20automa%C3%A7%C3%A3o%20de%20atendimento%20e%20intelig%C3%AAncia%20artificial%20para%20transformar%20suas%20vendas%20e%20agilizar%20o%20contato%20com%20clientes.%0A%0A%E2%9C%85%20Criamos%20funis%20automatizados%20funcionando%2024h/dia%0A%E2%9C%85%20IA%20integrada%20(GPT-4o)%20para%20atender', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  (81) 9 92530-6030
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">Converse gratuitamente com a IA</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-center text-muted-foreground mb-2">
                    Converse gratuitamente com a IA
                  </p>
                  <p className="font-semibold text-center">(81) 9 92530-6030</p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Localização</h3>
                    <p className="text-muted-foreground">Pernambuco, Brasil</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atendemos clientes em todo o Brasil com soluções personalizadas 
                  em automação e inteligência artificial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;