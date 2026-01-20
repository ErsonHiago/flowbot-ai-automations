import { Bot, MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-white py-12 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 glow-orb glow-orb-primary opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 glow-orb glow-orb-secondary opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg neon-border">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">FlowBot</span>
            </div>
            <p className="text-white/80 mb-4">
              Automação e Inteligência Artificial para transformar seu atendimento 
              e impulsionar suas vendas.
            </p>
            <div className="flex gap-4">
              <div className="glass p-2 rounded-lg hover:bg-secondary/30 transition-smooth cursor-pointer hover:shadow-neon">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="glass p-2 rounded-lg hover:bg-secondary/30 transition-smooth cursor-pointer hover:shadow-neon">
                <Phone className="h-5 w-5" />
              </div>
              <div className="glass p-2 rounded-lg hover:bg-secondary/30 transition-smooth cursor-pointer hover:shadow-neon">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-secondary transition-smooth">Atendimento por IA</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Gestão de CRM</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Automação de Campanhas</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Integração WhatsApp</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#servicos" className="hover:text-secondary transition-smooth">Nossos Serviços</a></li>
              <li><a href="#resultados" className="hover:text-secondary transition-smooth">Resultados</a></li>
              <li><a href="#beneficios" className="hover:text-secondary transition-smooth">Benefícios</a></li>
              <li><a href="#contato" className="hover:text-secondary transition-smooth">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-white/80">
              <a 
                href="https://wa.link/nipwbr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-smooth"
              >
                <MessageCircle className="h-4 w-4 text-secondary" />
                <span>(81) 8996-3940</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
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
          <p>&copy; 2025 FlowBot. Todos os direitos reservados. Automação e Soluções em IA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;