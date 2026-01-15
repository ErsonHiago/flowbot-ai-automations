import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5581989963940?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20como%20automatizar%20meu%20neg%C3%B3cio!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
