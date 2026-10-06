import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS, CATEGORIES } from '@/src/data/products.ts';
import { ProductCard } from '@/src/components/ProductCard.tsx';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

interface ProductsProps {
  onSelectProductForDetails: (product: Product) => void;
  onSelectProductForEnquiry: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onSelectProductForDetails,
  onSelectProductForEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoryExplanations: Record<string, string> = {
    all: 'Complete catalogue of pure cotton fabrics, structural woven textiles, traditional South Indian weaves, and bespoke manufacturing runs.',
    cotton: 'Comfortable and versatile textile materials suitable for different applications, woven with 100% natural cotton yarn.',
    woven: 'Quality woven materials produced with attention to consistency, balance, and fine textile finish.',
    traditional: 'Textile products inspired by traditional South Indian weaving craftsmanship and authentic border motifs.',
    custom: 'Flexible options for customers with specific textile requirements, pattern repeats, and yarn count requirements.',
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
              Manufacturing Catalogue
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#24211E] tracking-tight">
              Our Textile Products
            </h2>
            <div className="w-12 h-0.5 bg-[#B38548] mt-3 mb-4" />
            <p className="text-sm sm:text-base text-[#665C50] max-w-2xl leading-relaxed">
              {categoryExplanations[activeCategory] || categoryExplanations.all}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fabric name or weave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white rounded-lg border border-[#DDD5C7] text-[#24211E] placeholder-[#9C8F80] focus:outline-none focus:ring-2 focus:ring-[#B38548] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#9C8F80] hover:text-[#24211E]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill Discipline: Clean Segmented Controls) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#ECE5D8] rounded-xl overflow-x-auto max-w-fit mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#24211E] font-semibold shadow-xs'
                    : 'text-[#695F52] hover:text-[#24211E] hover:bg-[#F2ECE1]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onSelectProductForDetails}
                onEnquire={onSelectProductForEnquiry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-xl border border-[#E8E1D5]">
            <p className="text-sm font-semibold text-[#24211E]">No textile products match your search.</p>
            <p className="text-xs text-[#7A6E5F] mt-1">Try clearing your filters or search keywords.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#24211E] bg-[#EFE9DF] hover:bg-[#E5DDD0] rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Requirements Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#24211E] text-white border border-[#3D3730] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Specifications</span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
              Need A Custom Weave, Specific Reed-Pick, or Roll Dimension?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C6B7] mt-1.5 leading-relaxed">
              We configure our looms in Namakkal to weave customized yarn counts, warp densities, and specialized finishes for wholesale lots.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              const customProduct = PRODUCTS.find(p => p.category === 'custom') || PRODUCTS[0];
              onSelectProductForEnquiry(customProduct);
            }}
            className="px-5 py-3 text-xs font-semibold text-[#1A1612] bg-[#E8C88B] hover:bg-[#F2D79E] rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            Request Custom Weaving
          </button>
        </div>

      </div>
    </section>
  );
};
