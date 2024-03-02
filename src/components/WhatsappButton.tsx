import WhatsAppIcon from "../assets/WhatsappIcon";

export default function WhatsappButton() {
  return (
    <a
      aria-label="Link para entrar em contato via WhatsApp"
      href="https://api.whatsapp.com/send?phone=5511998687964"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white rounded-full p-3 shadow-lg z-50 fixed bottom-32 right-2 bg-[#25D366] transition-all hover:bg-[#1a9949] mbl:bottom-24"
    >
      <WhatsAppIcon width="36" height="36" />
    </a>
  );
}