import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Navigation, ExternalLink, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5F0E8]/40 border-t border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#24211E] tracking-tight">
            Contact Sitheswaran Tex
          </h2>
          <div className="w-12 h-0.5 bg-[#B38548] mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#61574B] leading-relaxed">
            Reach out directly for wholesale textile orders, yarn-dyed specifications, weaving facility queries, or samples.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Business Information Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Business Info Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DDD0] shadow-xs">
              <div className="border-b border-[#F0EAE1] pb-4 mb-5">
                <span className="font-brand text-lg font-bold tracking-wider text-[#24211E] uppercase">
                  Sitheswaran Tex
                </span>
                <p className="text-xs text-[#8A7968] mt-0.5 font-medium">
                  Textile & Weaving Business · Namakkal
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider block">
                      Location
                    </span>
                    <p className="text-sm font-medium text-[#24211E]">
                      Namakkal, Tamil Nadu, India
                    </p>
                    <p className="text-xs text-[#7A6E5F] mt-0.5">
                      Situated in western Tamil Nadu’s historic weaving and textile production corridor.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href="tel:8220366523"
                      className="text-sm font-semibold text-[#24211E] hover:text-[#9A6B29] transition-colors"
                    >
                      8220366523
                    </a>
                    <p className="text-xs text-[#7A6E5F] mt-0.5">
                      Click to call directly from your device.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href="mailto:PRIYASITHESWARAN2910@GMAIL.COM"
                      className="text-xs sm:text-sm font-semibold text-[#24211E] hover:text-[#9A6B29] transition-colors break-all"
                    >
                      PRIYASITHESWARAN2910@GMAIL.COM
                    </a>
                    <p className="text-xs text-[#7A6E5F] mt-0.5">
                      Click to send an email inquiry.
                    </p>
                  </div>
                </div>

                {/* Business Hours Note */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-[#F0EAE1]">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider block">
                      Operating Hours
                    </span>
                    <p className="text-xs text-[#4A453F]">
                      Monday – Saturday: 9:00 AM – 7:30 PM (IST)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Interactive Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="tel:8220366523"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#DDD5C7] text-xs font-semibold text-[#24211E] hover:bg-[#FAF6F0] hover:border-[#B38548] shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B38548]" />
                <span>Call Us</span>
              </a>

              <a
                href="mailto:PRIYASITHESWARAN2910@GMAIL.COM"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#DDD5C7] text-xs font-semibold text-[#24211E] hover:bg-[#FAF6F0] hover:border-[#B38548] shadow-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B38548]" />
                <span>Send Email</span>
              </a>

              <a
                href="https://wa.me/918220366523?text=Hello%20Sitheswaran%20Tex,%20I%20would%20like%20to%20enquire%20about%20your%20textile%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-xs font-semibold text-white shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Stylized Map Card for Namakkal, Tamil Nadu */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E5DDD0] shadow-xs overflow-hidden flex flex-col justify-between">
            
            {/* Map Header */}
            <div className="p-5 sm:p-6 border-b border-[#F0EAE1] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#9A6B29] uppercase tracking-wider block">
                  Regional Production Center
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#24211E]">
                  Namakkal, Tamil Nadu, India
                </h3>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Namakkal,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#24211E] hover:text-[#9A6B29] bg-[#FAF8F5] hover:bg-[#F2ECE1] rounded-lg border border-[#DDD5C7] transition-colors"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Visual Map Representation */}
            <div className="relative bg-[#ECE5D8] h-64 sm:h-72 p-6 flex flex-col items-center justify-center overflow-hidden">
              {/* Map grid lines background */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#8A7C6E_1px,transparent_1px),linear-gradient(to_bottom,#8A7C6E_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Stylized contour rings */}
              <div className="absolute w-64 h-64 rounded-full border border-[#D4C4B0] opacity-50 pointer-events-none" />
              <div className="absolute w-96 h-96 rounded-full border border-[#D4C4B0] opacity-30 pointer-events-none" />

              {/* Central Map Marker */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#24211E] text-[#D4AF37] flex items-center justify-center shadow-lg border-2 border-white animate-bounce duration-1000">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/20 rounded-full blur-[2px]" />
                </div>

                <div className="mt-3 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl shadow-md border border-[#E0D7C9]">
                  <span className="font-brand text-xs font-bold text-[#24211E] tracking-wider block">
                    SITHESWARAN TEX
                  </span>
                  <span className="text-[11px] text-[#7A6E5F] block">
                    Namakkal, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Regional connection hints */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#695F52] bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/60">
                <span>Coordinates: 11.2189° N, 78.1674° E</span>
                <span className="font-medium text-[#24211E]">Western Tamil Nadu Weaving Zone</span>
              </div>
            </div>

            {/* Logistics & Connectivity Context */}
            <div className="p-5 sm:p-6 bg-[#FAF8F5] border-t border-[#F0EAE1]">
              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-[#B38548] shrink-0 mt-0.5" />
                <p className="text-xs text-[#63584B] leading-relaxed">
                  Namakkal is centrally linked to Salem, Erode, Tirupur, and Karur textile corridors with direct road and rail freight routes for rapid fabric dispatch across India.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
