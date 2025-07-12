import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
    
      <div className="relative z-[20]">
  {/* Call Button */}
  <a
    href="tel:+919106623100"
    className="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-[9999]"
    aria-label="Call Us"
  >
    <Phone className="w-8 h-8 p-0.5" />
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/+919106623100?text=Hi%20there!"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-28 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-[9999]"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp className="w-8 h-8" />
  </a>
</div>

    </>
  );
};

export default FloatingButtons;
