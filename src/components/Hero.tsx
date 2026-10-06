import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Factory, Award } from 'lucide-react';
import heroImg from '@/src/assets/images/hero_textile_loom_1791307545790.jpg';

interface HeroProps {
  onExploreProducts: () => void;
  onSendEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onSendEnquiry }) => {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Hero Visual Area with High-Impact Scrim & Textile Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <div className="relative rounded-2xl overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center shadow-xl border border-[#DCD3C5]">
          
          {/* Background Image with Fallback */}
          <div className="absolute inset-0 z-0 bg-[#2C241C]">
            <img
              src={heroImg}
              alt="Artisanal textile weaving loom with fine warp threads at Sitheswaran Tex"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            {/* Measured Multi-stop Scrim for 4.5:1 text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17130F]/92 via-[#1C1713]/80 to-[#2A2219]/45 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/90 via-transparent to-black/30" />
            
            {/* Subtle thread watermark pattern */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          {/* Foreground Hero Content */}
          <div className="relative z-10 w-full max-w-3xl px-6 sm:px-10 lg:px-14 py-12 text-white">
            
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              <span>Namakkal, Tamil Nadu</span>
              <span aria-hidden="true" className="text-[#8F7E6B]">·</span>
              <span>Textile & Weaving Craft</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-5 text-balance">
              Weaving Quality Into Every Thread
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#DDD3C7] font-normal leading-relaxed mb-8 max-w-2xl font-sans">
              Sitheswaran Tex combines traditional weaving expertise with consistent quality to deliver reliable textile products for modern requirements.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreProducts}
                className="px-6 py-3.5 text-sm font-semibold text-[#1A1612] bg-[#E8C88B] hover:bg-[#F2D79E] active:bg-[#DDA960] rounded-xl shadow-md transition-all duration-150 flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onSendEnquiry}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-xl border border-white/25 backdrop-blur-sm transition-all duration-150 cursor-pointer"
              >
                Send Enquiry
              </button>
            </div>

            {/* Subtle location / heritage notice */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#BDB2A3]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Dedicated Loom Facilities
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Pure Cotton & Custom Blends
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Direct Manufacturer Inquiries
              </span>
            </div>
          </div>
        </div>

        {/* Small Trust Section Below Hero */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8E1D5] shadow-xs hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-[#24211E] leading-snug">
                  Quality Focused
                </h2>
                <p className="text-xs text-[#73685A] mt-1 leading-normal">
                  Strict thread integrity and uniform weave density.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8E1D5] shadow-xs hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-[#24211E] leading-snug">
                  Skilled Craftsmanship
                </h2>
                <p className="text-xs text-[#73685A] mt-1 leading-normal">
                  Experienced hands guiding warp tension and finishing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8E1D5] shadow-xs hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-[#24211E] leading-snug">
                  Reliable Production
                </h2>
                <p className="text-xs text-[#73685A] mt-1 leading-normal">
                  Consistent bulk lot weaving with dependable timelines.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8E1D5] shadow-xs hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-[#24211E] leading-snug">
                  Customer Satisfaction
                </h2>
                <p className="text-xs text-[#73685A] mt-1 leading-normal">
                  Prompt communication and transparent business service.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
