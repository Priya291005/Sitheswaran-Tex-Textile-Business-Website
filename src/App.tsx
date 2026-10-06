/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from '@/src/components/Navbar.tsx';
import { Hero } from '@/src/components/Hero.tsx';
import { About } from '@/src/components/About.tsx';
import { Products } from '@/src/components/Products.tsx';
import { ProductModal } from '@/src/components/ProductModal.tsx';
import { Process } from '@/src/components/Process.tsx';
import { WhyChooseUs } from '@/src/components/WhyChooseUs.tsx';
import { Gallery } from '@/src/components/Gallery.tsx';
import { EnquiryForm } from '@/src/components/EnquiryForm.tsx';
import { Contact } from '@/src/components/Contact.tsx';
import { Footer } from '@/src/components/Footer.tsx';
import { FloatingActions } from '@/src/components/FloatingActions.tsx';
import { Product } from '@/src/data/products.ts';

export default function App() {
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForEnquiry = (product: Product) => {
    setEnquiryProduct(product);
    scrollToEnquiry();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211E] flex flex-col font-sans selection:bg-[#B38548] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onEnquireClick={scrollToEnquiry} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={scrollToProducts}
          onSendEnquiry={scrollToEnquiry}
        />

        {/* About Us Section */}
        <About />

        {/* Products Catalogue Section */}
        <Products
          onSelectProductForDetails={(prod) => setDetailProduct(prod)}
          onSelectProductForEnquiry={handleSelectProductForEnquiry}
        />

        {/* Our Weaving Process Section */}
        <Process />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Production & Textile Gallery Section */}
        <Gallery />

        {/* Product Details Modal */}
        <ProductModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onEnquire={handleSelectProductForEnquiry}
        />

        {/* Enquiry Form Section */}
        <EnquiryForm
          preselectedProduct={enquiryProduct}
          onClearPreselected={() => setEnquiryProduct(null)}
        />

        {/* Business Information & Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Action Floating Controls */}
      <FloatingActions />
    </div>
  );
}
