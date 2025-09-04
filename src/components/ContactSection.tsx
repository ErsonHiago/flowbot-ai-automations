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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Vamos conversar sobre seu <span className="text-primary">projeto</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Entre em contato conosco e descubra como a FlowBot pode transformar 
            seu atendimento e impulsionar suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card shadow-card hover:shadow-tech tech-hover animate-tech-glow animate-on-scroll">
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
                onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20demonstra%C3%A7%C3%A3o%20com%20voc%C3%AAs!%20', '_blank')}
              >
                Quero uma demonstração gratuita
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="gradient-card shadow-card hover:shadow-tech tech-hover">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 gradient-tech opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/20 p-3 rounded-lg shadow-tech">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">Fale conosco agora</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground hover:shadow-tech transition-tech"
                  onClick={() => window.open('https://wa.me/5581992536030?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20demonstra%C3%A7%C3%A3o%20com%20voc%C3%AAs!%20', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  (81) 9 92530-6030
                </Button>
              </div>
            </CardContent>
          </Card>


            <Card className="gradient-card shadow-card hover:shadow-tech tech-hover">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 gradient-tech opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/20 p-3 rounded-lg shadow-tech">
                      <MapPin className="h-6 w-6 text-primary" />
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
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;