import { Bot, MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Bot className="h-6 w-6 text-secondary" />
              </div>
              <span className="text-xl font-bold">FlowBot</span>
            </div>
            <p className="text-white/80 mb-4">
              Automação e Inteligência Artificial para transformar seu atendimento 
              e impulsionar suas vendas.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth cursor-pointer">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Atendimento por IA</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Gestão de CRM</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Automação de Campanhas</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Integração WhatsApp</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#sobre" className="hover:text-accent transition-smooth">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-smooth">Nossos Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-accent transition-smooth">Benefícios</a></li>
              <li><a href="#contato" className="hover:text-accent transition-smooth">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <span>(81) 9 92530-6030</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>Converse com a IA</span>
              </div>
              <div>
                <p className="text-sm">Pernambuco, Brasil</p>
                <p className="text-sm">Atendimento em todo o país</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 FlowBot. Todos os direitos reservados. Automação e Soluções em IA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;