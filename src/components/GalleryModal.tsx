import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/src/data/gallery.ts';

interface GalleryModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox"
    >
      {/* Top Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-[#1A1815]/80 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10 text-xs text-[#EAE2D5] pointer-events-auto">
          <span className="font-semibold text-white">{currentIndex + 1}</span> / {items.length}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Lightbox Frame */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container with Nav arrows */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Previous Button */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 sm:-left-12 z-20 w-11 h-11 rounded-full bg-[#1A1815]/80 hover:bg-white hover:text-[#1A1815] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Image */}
          <div className="max-h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#141210]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto object-contain mx-auto transition-transform duration-200"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 sm:-right-12 z-20 w-11 h-11 rounded-full bg-[#1A1815]/80 hover:bg-white hover:text-[#1A1815] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full mt-4 bg-[#1F1C18]/85 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
            {currentItem.category}
          </div>
          <h3 className="text-base sm:text-lg font-serif font-bold text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs text-[#D1C7BA] mt-1">
            {currentItem.description}
          </p>
        </div>

      </div>
    </div>
  );
};
