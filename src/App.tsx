import { useState } from 'react';
import type { Brand } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandSelector from './components/BrandSelector';
import ProductCatalog from './components/ProductCatalog';
import AboutBrand from './components/AboutBrand';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import TestimonialsMarquee from './components/TestimonialsMarquee';
import InstagramFeed from './components/InstagramFeed';

export default function App() {
  const [activeBrand, setActiveBrand] = useState<Brand | 'ALL'>('ALL');

  const handleBrandChange = (brand: Brand | 'ALL') => {
    setActiveBrand(brand);
    setTimeout(() => {
      const el = document.querySelector('#urunler');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandSelector active={activeBrand} onChange={handleBrandChange} />
      <div id="urunler">
        <ProductCatalog activeBrand={activeBrand} />
      </div>
      <TestimonialsMarquee />
      <InstagramFeed />
      <AboutBrand />
      <Newsletter />
      <Footer />
      <FloatingButton />
    </div>
  );
}
