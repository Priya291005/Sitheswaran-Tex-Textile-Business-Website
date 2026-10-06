import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#process', label: 'Process' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#1C1814] text-[#D1C7BA] border-t border-[#2F2922] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2D261E]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#2B241D] flex items-center justify-center text-[#D4AF37] border border-[#42372A]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M3 9h18" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M3 15h18" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M9 3v18" stroke="#B38548" strokeWidth="1.5" />
                  <path d="M15 3v18" stroke="#B38548" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-brand text-xl font-bold tracking-wider text-white uppercase">
                SITHESWARAN TEX
              </span>
            </div>

            <p className="font-serif italic text-[#E5DDD0] text-sm sm:text-base">
              “Tradition in Every Thread. Quality in Every Weave.”
            </p>

            <p className="text-xs text-[#9E9182] leading-relaxed max-w-sm">
              Weaving quality cotton fabrics, textured weaves, traditional textiles, and custom specifications with dependable craftsmanship in Namakkal, Tamil Nadu.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B38548] shrink-0 mt-0.5" />
                <span>Namakkal, Tamil Nadu, India</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B38548] shrink-0" />
                <a href="tel:8220366523" className="hover:text-white transition-colors">
                  8220366523
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B38548] shrink-0" />
                <a
                  href="mailto:PRIYASITHESWARAN2910@GMAIL.COM"
                  className="hover:text-white transition-colors break-all"
                >
                  PRIYASITHESWARAN2910@GMAIL.COM
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#enquiry"
                className="inline-block px-4 py-2 text-xs font-semibold text-[#1C1814] bg-[#E8C88B] hover:bg-[#F2D79E] rounded-lg transition-colors"
              >
                Request Fabric Quotation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7D6F]">
          <div>
            © 2026 Sitheswaran Tex. All Rights Reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
