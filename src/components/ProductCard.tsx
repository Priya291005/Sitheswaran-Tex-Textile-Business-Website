import React from 'react';
import { Eye, MessageSquare, ArrowRight } from 'lucide-react';
import { Product } from '@/src/data/products.ts';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onEnquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onEnquire,
}) => {
  return (
    <article className="group bg-white rounded-xl border border-[#E5DDD0] shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 transition-all duration-200 flex flex-col overflow-hidden">
      
      {/* Product Image Box */}
      <div className="relative aspect-[4/3] bg-[#EAE3D6] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Unboxed clean metadata kicker */}
        <div className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide text-white bg-[#24211E]/80 backdrop-blur-xs px-2.5 py-1 rounded">
          {product.categoryLabel}
        </div>
      </div>

      {/* Product Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-serif font-semibold text-[#24211E] group-hover:text-[#8A5A1C] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#6B6154] leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>

          {/* Quick Technical Highlight */}
          <div className="mt-3.5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#8A7C6E]">
            <span className="truncate">Weave: {product.specs.weaveType.split('/')[0]}</span>
            <span className="text-[11px] font-medium text-[#B38548] shrink-0 ml-2">Customizable</span>
          </div>
        </div>

        {/* Action Buttons: View Details & Enquire */}
        <div className="mt-5 pt-3.5 border-t border-[#EAE3D6] grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#4A453F] hover:text-[#24211E] bg-[#FAF8F5] hover:bg-[#F0EAE0] rounded-lg border border-[#DDD5C7] transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#B38548]" />
            <span>View Details</span>
          </button>

          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#24211E] hover:bg-[#3D3731] rounded-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Enquire</span>
          </button>
        </div>

      </div>
    </article>
  );
};
