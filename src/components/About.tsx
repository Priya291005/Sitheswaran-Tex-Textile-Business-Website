import React from 'react';
import { Eye, Layers, Compass, Headphones } from 'lucide-react';
import aboutImg from '@/src/assets/images/about_textile_craft_1791307559505.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5F0E8]/40 border-y border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
            Heritage & Dedication
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#24211E] tracking-tight">
            About Sitheswaran Tex
          </h2>
          <div className="w-12 h-0.5 bg-[#B38548] mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#5E5448] leading-relaxed">
            Sitheswaran Tex is a specialized textile weaving enterprise based in the vibrant textile region of Namakkal, Tamil Nadu. We are devoted to producing dependable woven fabrics with careful attention to thread density, fabric texture, and authentic craftsmanship.
          </p>
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Subtle Frame & Cultural Details */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative border offset */}
              <div className="absolute -inset-2 rounded-2xl border border-[#D9CEBF] translate-x-2 translate-y-2 -z-10 bg-[#EFE9DE]" />
              
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-[#24211E] aspect-[4/3]">
                <img
                  src={aboutImg}
                  alt="Traditional textile weaver guiding shuttle on loom at Sitheswaran Tex"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Image caption badge - clean unboxed */}
                <div className="absolute bottom-3 left-4 right-4 text-xs text-[#EAE4DB]">
                  <span className="font-semibold text-white">Loom Craftsmanship</span>
                  <span className="mx-1.5 opacity-60">·</span>
                  <span>Namakkal Manufacturing Facility</span>
                </div>
              </div>
            </div>

            {/* Editable business placeholder note */}
            <div className="mt-5 p-4 rounded-xl bg-white/70 border border-[#E2D9CC] text-xs text-[#73685A] leading-relaxed">
              <span className="font-semibold text-[#24211E]">Namakkal Weaving Hub:</span> Strategically situated in western Tamil Nadu’s historic cotton and weaving belt, enabling continuous access to selected yarn sources and seasoned weaving talent.
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Pillar 1: Textile Craftsmanship */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8E1D5] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#24211E] mb-2 font-serif">
                  Textile Craftsmanship
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6154] leading-relaxed">
                  Decades of regional weaving know-how channelled into every cloth roll. We honor the discipline of warp preparation and balanced shuttle movement.
                </p>
              </div>

              {/* Pillar 2: Quality-Focused Production */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8E1D5] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#24211E] mb-2 font-serif">
                  Quality-Focused Production
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6154] leading-relaxed">
                  Prioritizing yarn uniformity, structural integrity, and clean selvedges across every batch rather than cutting corners for volume.
                </p>
              </div>

              {/* Pillar 3: Attention to Detail */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8E1D5] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#24211E] mb-2 font-serif">
                  Attention to Detail
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6154] leading-relaxed">
                  From inspecting thread tension during weaving to final visual inspection of rolls, no uneven knotting or loose reed marks pass unexamined.
                </p>
              </div>

              {/* Pillar 4: Reliable Customer Service */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E8E1D5] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center mb-4">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#24211E] mb-2 font-serif">
                  Reliable Customer Service
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6154] leading-relaxed">
                  Direct manufacturer accessibility. We listen carefully to your fabric requirements, provide straightforward updates, and deliver on commitments.
                </p>
              </div>

            </div>

            {/* Quote / Philosophy Bar */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#24211E] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-wider text-[#D4AF37] uppercase font-semibold">
                  Our Guiding Principle
                </p>
                <p className="text-base font-serif italic text-[#F2ECE3] mt-1">
                  “Tradition in Every Thread. Quality in Every Weave.”
                </p>
              </div>
              <a
                href="#products"
                className="px-4 py-2 text-xs font-semibold text-[#24211E] bg-[#E8C88B] hover:bg-[#F2D79E] rounded-lg shrink-0 transition-colors"
              >
                View Collection
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
