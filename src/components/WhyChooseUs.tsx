import React from 'react';
import { ShieldCheck, Award, Clock, HeartHandshake, Sparkles } from 'lucide-react';

interface ReasonItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

export const WhyChooseUs: React.FC = () => {
  const reasons: ReasonItem[] = [
    {
      title: 'Quality Focus',
      subtitle: 'Focused on consistent textile quality.',
      description: 'We do not compromise on thread count, picks-per-inch, or fabric density. Every meter of woven material conforms to uniform standards to avoid downstream processing defects.',
      icon: ShieldCheck
    },
    {
      title: 'Skilled Craftsmanship',
      subtitle: 'Experience-driven attention to weaving and finishing.',
      description: 'Drawing upon traditional Tamil Nadu handloom and powerloom expertise, our weavers understand yarn behavior, seasonal humidity impacts on cotton, and reed balancing.',
      icon: Award
    },
    {
      title: 'Reliable Service',
      subtitle: 'Professional communication and dependable service.',
      description: 'Direct, clear communication from inquiry to delivery. We respect committed lead times and provide transparent order status updates throughout manufacturing.',
      icon: Clock
    },
    {
      title: 'Customer Focus',
      subtitle: 'Understanding customer requirements and providing suitable solutions.',
      description: 'Whether you require standard cotton greige rolls, traditional border weaves, or custom width adaptations, we tailor our weaving setup to fulfill your exact application.',
      icon: HeartHandshake
    },
    {
      title: 'Craftsmanship & Care',
      subtitle: 'Attention to detail throughout the textile process.',
      description: 'From yarn cone inspection to packaging and roll protection, every stage receives thoughtful supervision so that fabrics reach your premises in pristine condition.',
      icon: Sparkles
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
            The Sitheswaran Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#24211E] tracking-tight">
            Why Choose Sitheswaran Tex
          </h2>
          <div className="w-12 h-0.5 bg-[#B38548] mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#665D51] leading-relaxed">
            Combining dependable weaving infrastructure in Namakkal with authentic textile integrity, we build long-standing relationships with apparel makers, wholesalers, and fabric houses.
          </p>
        </div>

        {/* 5 Premium Cards Grid with Asymmetric Marquee Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E5DDD0] shadow-xs hover:border-[#D4AF37]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#24211E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#9A6B29] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#665D51] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F0EAE1] text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider">
                  Core Commitment 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Cards Grid (Wide Span) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {reasons.slice(3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx + 3}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E5DDD0] shadow-xs hover:border-[#D4AF37]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#FAF5EC] text-[#9A6B29] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#24211E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#9A6B29] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#665D51] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F0EAE1] text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider">
                  Core Commitment 0{idx + 4}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
