import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '@/src/data/products.ts';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#D9CEBF] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#24211E] shadow-sm flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#B38548] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Modal Left / Top: Large Product Image */}
          <div className="md:col-span-5 bg-[#24211E] relative min-h-[260px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-3 left-3 text-xs text-white md:hidden">
              <span className="font-semibold">{product.categoryLabel}</span>
            </div>
          </div>

          {/* Modal Right / Details */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
                <span>{product.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Direct Manufacturer</span>
              </div>

              <h2
                id="modal-product-title"
                className="text-xl sm:text-2xl font-serif font-bold text-[#24211E] leading-snug"
              >
                {product.name}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[#5E5448] leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Key Features List */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#24211E] mb-2.5">
                  Key Craft & Material Features
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#63594D]">
                      <CheckCircle2 className="w-4 h-4 text-[#B38548] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              <div className="mt-6 pt-5 border-t border-[#EAE3D6]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#24211E] mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-[#E5DDD0]">
                    <span className="text-[#8A7C6E] block text-[11px]">Weave Structure</span>
                    <span className="font-semibold text-[#24211E]">{product.specs.weaveType}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#E5DDD0]">
                    <span className="text-[#8A7C6E] block text-[11px]">Yarn Count</span>
                    <span className="font-semibold text-[#24211E]">{product.specs.yarnCount}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#E5DDD0]">
                    <span className="text-[#8A7C6E] block text-[11px]">Available Width</span>
                    <span className="font-semibold text-[#24211E]">{product.specs.width}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#E5DDD0]">
                    <span className="text-[#8A7C6E] block text-[11px]">Standard Finish</span>
                    <span className="font-semibold text-[#24211E]">{product.specs.finish}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-[#EAE3D6] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[#7A6E5F]">
                <ShieldCheck className="w-4 h-4 text-[#9A6B29]" />
                <span>Custom lot sizes woven on request</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#544B41] hover:text-[#24211E] bg-white rounded-lg border border-[#DDD5C7] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onEnquire(product);
                    onClose();
                  }}
                  className="flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white bg-[#24211E] hover:bg-[#3D3731] rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Enquire For This Fabric</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
