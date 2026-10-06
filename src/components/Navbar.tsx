import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'products', 'process', 'gallery', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', id: 'home', label: 'Home' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#products', id: 'products', label: 'Products' },
    { href: '#process', id: 'process', label: 'Our Process' },
    { href: '#gallery', id: 'gallery', label: 'Gallery' },
    { href: '#why-us', id: 'why-us', label: 'Why Us' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3.5'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#E8E2D9]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark with brand styling */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38548]"
            aria-label="Sitheswaran Tex Home"
          >
            {/* Elegant textile loom/thread inspired emblem */}
            <div className="w-9 h-9 rounded-md bg-[#24211E] flex items-center justify-center text-[#D4AF37] shadow-sm transition-transform group-hover:scale-105 duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                {/* Loom & woven warp/weft motif */}
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M3 9h18" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M3 15h18" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M9 3v18" stroke="#B38548" strokeWidth="1.5" />
                <path d="M15 3v18" stroke="#B38548" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-brand text-lg sm:text-xl font-bold tracking-wider text-[#24211E] uppercase leading-none">
                Sitheswaran Tex
              </span>
              <span className="text-[10px] tracking-widest text-[#8A7968] uppercase font-medium mt-0.5">
                Namakkal · Weaving
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A453F]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-[#8A5A1C] font-semibold'
                      : 'hover:text-[#24211E]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B38548] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:8220366523"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#5C5247] hover:text-[#24211E] transition-colors rounded-lg border border-[#DDD5C7] hover:bg-[#F2ECE1] whitespace-nowrap"
              title="Call Sitheswaran Tex"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38548]" />
              <span>8220366523</span>
            </a>
            
            <button
              type="button"
              onClick={onEnquireClick}
              className="flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white bg-[#24211E] hover:bg-[#3D3731] active:bg-[#1A1816] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onEnquireClick}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#24211E] rounded-md"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A453F] hover:text-[#24211E] rounded-md border border-[#E0D7C9] focus:outline-none focus:ring-2 focus:ring-[#B38548]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E0D7C9] px-4 pt-3 pb-5 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#EFE8DC] text-[#8A5A1C] font-semibold'
                      : 'text-[#4A453F] hover:bg-[#F4EFE6]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#E0D7C9] flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-[#73685A] px-2">
              <span>Namakkal, Tamil Nadu, India</span>
              <a href="tel:8220366523" className="font-semibold text-[#24211E] hover:underline">
                8220366523
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquireClick();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#24211E] hover:bg-[#3D3731] rounded-lg shadow text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Send An Enquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
