import React, { useState } from 'react';
import { Sparkles, Cog, CheckSquare, PackageCheck, Scissors, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  details: string;
  highlights: string[];
  icon: React.ElementType;
}

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Yarn Selection',
      subtitle: 'Careful selection of suitable yarn and fiber material.',
      details: 'Every textile batch begins with procuring reliable yarn cones with verified tensile strength, uniform twist factor, and consistent count (Ne). We source natural cotton and chosen blends suited for high weaving performance.',
      highlights: ['Uniform Ne Yarn Count Inspection', 'Tensile Strength Testing', 'Zero Slub / Neps Verification'],
      icon: Scissors
    },
    {
      number: '02',
      title: 'Preparation',
      subtitle: 'Preparing the warp and weft yarns for the weaving process.',
      details: 'Warp yarns undergo precision winding and warping onto the weaver’s beam under uniform mechanical tension. Sizing is carefully calibrated to reinforce the threads, preventing yarn breakage and ensuring smooth reed movement.',
      highlights: ['Beam Warping & Sizing', 'Equalized Warp Tension Control', 'Drafting & Denting through Reeds'],
      icon: Cog
    },
    {
      number: '03',
      title: 'Weaving',
      subtitle: 'Fabric is woven with attention to consistency and quality.',
      details: 'The prepared loom interlaces the warp and weft threads in synchronized cadence. Shuttle or rapier pick insertion is closely monitored to ensure tight selvedges, constant picks per inch (PPI), and clean geometric uniformity.',
      highlights: ['Synchronized Shuttle Motion', 'Strict Picks-Per-Inch (PPI) Adherence', 'Clean Selvedge Boundary Weaving'],
      icon: Sparkles
    },
    {
      number: '04',
      title: 'Quality Check',
      subtitle: 'Checking the finished material for quality and consistency.',
      details: 'Freshly woven grey fabrics are mounted on illuminated inspection tables. Skilled inspectors scrutinize every yard for warp floats, broken picks, oil stains, or reed marks, tagging any variances before batch clearing.',
      highlights: ['Illuminated Inspection Frame Review', 'Defect Tagging & Fault Minimization', 'Dimensional Stability Check'],
      icon: CheckSquare
    },
    {
      number: '05',
      title: 'Finishing',
      subtitle: 'Final preparation and secure packaging before delivery.',
      details: 'Completed rolls receive final cutting, measuring, folding, and moisture-proof protective wrapping. Each lot is marked with full batch identifiers ready for prompt logistics dispatch from Namakkal.',
      highlights: ['Precision Roll Measurement', 'Moisture-Proof Poly Wrapping', 'Dispatch-Ready Lot Labeling'],
      icon: PackageCheck
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F5F0E8]/50 border-y border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
            Craft & Discipline
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#24211E] tracking-tight">
            Our Weaving Process
          </h2>
          <div className="w-12 h-0.5 bg-[#B38548] mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#61574B] leading-relaxed">
            From raw cotton yarn cones to dispatch-ready textile rolls, each stage at Sitheswaran Tex is guided by established weaving techniques and thorough quality checkpoints.
          </p>
        </div>

        {/* Desktop / Tablet Timeline Stepper */}
        <div className="relative mb-12">
          {/* Thread Divider Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[#DDD5C7] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#B38548] shadow-md ring-2 ring-[#B38548]/20'
                      : 'bg-white/80 border-[#E5DDD0] hover:bg-white hover:border-[#D1C5B3]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-brand text-xs font-bold tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#24211E] text-[#D4AF37]' : 'bg-[#EFE9DF] text-[#7A6E5F]'
                      }`}>
                        {step.number}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#B38548]' : 'text-[#8A7C6E]'}`} />
                    </div>

                    <h3 className={`text-sm sm:text-base font-serif font-bold leading-snug ${
                      isSelected ? 'text-[#24211E]' : 'text-[#4A453F]'
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#6B6154] mt-1.5 leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center gap-1 text-[11px] font-medium text-[#9A6B29]">
                    <span>{isSelected ? 'Viewing Stage' : 'Inspect Stage'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Spotlight Card */}
        <div className="bg-white rounded-2xl border border-[#D9CEBF] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9A6B29] tracking-wider uppercase mb-2">
                <span>Phase {steps[activeStep].number} In Detail</span>
                <span aria-hidden="true">·</span>
                <span>Production Standard</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#24211E]">
                {steps[activeStep].number} — {steps[activeStep].title}
              </h3>

              <p className="mt-3 text-sm text-[#5C5347] leading-relaxed">
                {steps[activeStep].details}
              </p>

              <div className="mt-6 pt-5 border-t border-[#EFEAE2]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#24211E] mb-3">
                  Key Checkpoint Standards:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].highlights.map((item, i) => (
                    <div key={i} className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E8E1D5] text-xs text-[#4A453F] font-medium flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B38548] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation Stepper Controls */}
            <div className="lg:col-span-4 bg-[#FAF8F5] p-5 rounded-xl border border-[#E5DDD0] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#8A7C6E] uppercase tracking-wider block mb-1">
                  Weaving Flow Progress
                </span>
                <p className="text-xs text-[#5C5347] leading-relaxed">
                  Stage {activeStep + 1} of 5 in the Sitheswaran Tex production cycle.
                </p>
                
                {/* Visual mini-bar */}
                <div className="w-full bg-[#E5DDD0] h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-[#B38548] h-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="flex-1 py-2 text-xs font-semibold rounded-lg border border-[#DDD5C7] bg-white text-[#4A453F] hover:bg-[#F0EAE0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Previous Stage
                </button>
                <button
                  type="button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="flex-1 py-2 text-xs font-semibold rounded-lg bg-[#24211E] text-white hover:bg-[#3D3731] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
