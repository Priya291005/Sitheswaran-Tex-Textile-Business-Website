import React, { useState } from 'react';
import { GALLERY_ITEMS } from '@/src/data/gallery.ts';
import { GalleryModal } from '@/src/components/GalleryModal.tsx';
import { Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % GALLERY_ITEMS.length));
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F5F0E8]/40 border-y border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
              Visual Craftsmanship
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#24211E] tracking-tight">
              Production & Textile Gallery
            </h2>
            <div className="w-12 h-0.5 bg-[#B38548] mt-3 mb-4" />
            <p className="text-sm sm:text-base text-[#665D51] max-w-2xl leading-relaxed">
              A glimpse into our Namakkal weaving environment, featuring active looms, precision yarn alignment, tactile fabric textures, and finished cloth rolls.
            </p>
          </div>

          <div className="text-xs text-[#8A7C6E] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B38548]" />
            <span>Click any image to view in high-resolution lightbox</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-[#24211E] aspect-[4/3] cursor-pointer shadow-xs border border-[#E0D7C9] hover:border-[#D4AF37] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Zoom Icon Affordance */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider block mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-sm font-serif font-bold text-white line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
