import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919212533254?text=Hi%20PK%20Lighting,%20I%20am%20interested%20in%20your%20LED%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition hover:scale-110"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}