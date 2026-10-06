import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick contact and navigation" className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#24211E] shadow-md border border-[#E0D7C9] flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#7A6E5F]" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/918220366523?text=Hello%20Sitheswaran%20Tex,%20I%20would%20like%20to%20enquire%20about%20your%20textile%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] transition-all duration-200 hover:scale-105"
        title="Chat on WhatsApp (+91 8220366523)"
        aria-label="Chat on WhatsApp with Sitheswaran Tex"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap hidden sm:inline">
          WhatsApp Enquiry
        </span>
      </a>
    </aside>
  );
};
