import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import type { Product } from '../data/products';

interface Props {
  product: Product;
}

type AccordionTab = 'barcode' | 'description' | 'usage' | 'ingredients' | 'warning';

export default function ProductCard({ product }: Props) {
  const [activeTab, setActiveTab] = useState<AccordionTab | null>(null);

  return (
    <article className= "group bg-white border border-gray-100 hover:border-antrasit/20 transition-all duration-400 flex flex-col overflow-hidden shadow-sm hover:shadow-md">
      {/* Image */}
<div className="relative overflow-hidden bg-transparent aspect-[4/3] p-4 flex items-center justify-center">
  <img
    src={product.imageUrl}
    alt={product.imageAlt}
    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
  />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-antrasit/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-4 right-4">
            <span className="luxury-label text-[9px] px-3 py-1.5 bg-[#242426] text-offwhite">
              {product.tag}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Concern */}
        <span
          className="luxury-label text-[9px] mb-3 block"
          style={{ color: product.accentColor }}
        >
          {product.concern}
        </span>

        {/* Names */}
        <h3 className="luxury-heading text-lg mb-1 leading-tight">{product.name}</h3>
        <p className="font-sans text-xs text-antrasit/60 mb-3 tracking-wide">{product.subtitle}</p>

        {/* Divider */}
        <div
          className="h-px w-8 mb-4 transition-all duration-300 group-hover:w-16"
          style={{ backgroundColor: product.accentColor }}
        >
          </div>

        {/* Short Preview Description */}
        <p className="font-sans text-xs text-antrasit/60 leading-relaxed mb-5 flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Product Info Accordion */}
        <div className="border border-cream-dark mb-5">
          {/* Tab Headers */}
          <div className="flex flex-col divide-y divide-cream-dark">
            
            {/* 3- Barcode Tab */}
            <button
              onClick={() => setActiveTab(activeTab === 'barcode' ? null : 'barcode')}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-cream transition-colors duration-200"
              aria-expanded={activeTab === 'barcode'}
            >
              <span className="luxury-label text-[9px] text-antrasit/70">3- Barcode</span>
              <ChevronDown
                size={14}
                className={`text-antrasit/40 transition-transform duration-300 ${
                  activeTab === 'barcode' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeTab === 'barcode' && (
              <div className="px-4 py-3 bg-cream/50 border-t border-cream-dark">
                <p className="font-mono text-xs text-antrasit/80 tracking-wider">{product.barcode}</p>
              </div>
            )}

            {/* 4- Açıklama Tab */}
            <button
              onClick={() => setActiveTab(activeTab === 'description' ? null : 'description')}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-cream transition-colors duration-200"
              aria-expanded={activeTab === 'description'}
            >
              <span className="luxury-label text-[9px] text-antrasit/70">4- Açıklama</span>
              <ChevronDown
                size={14}
                className={`text-antrasit/40 transition-transform duration-300 ${
                  activeTab === 'description' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeTab === 'description' && (
              <div className="px-4 py-3 bg-cream/50 border-t border-cream-dark">
                <p className="font-sans text-xs text-antrasit/60 leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* 5- Kullanım Şekli Tab */}
            <button
              onClick={() => setActiveTab(activeTab === 'usage' ? null : 'usage')}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-cream transition-colors duration-200"
              aria-expanded={activeTab === 'usage'}
            >
              <span className="luxury-label text-[9px] text-antrasit/70">5- Kullanım Şekli</span>
              <ChevronDown
                size={14}
                className={`text-antrasit/40 transition-transform duration-300 ${
                  activeTab === 'usage' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeTab === 'usage' && (
              <div className="px-4 py-3 bg-cream/50 border-t border-cream-dark">
                <ol className="space-y-1.5">
                  {product.usage.map((step, i) => (
                    <li key={i} className="flex gap-3 text-xs text-antrasit/60 leading-relaxed">
                      <span
                        className="font-sans font-medium text-[10px] mt-0.5 shrink-0"
                        style={{ color: product.accentColor }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* 6- İçindekiler Tab */}
            <button
              onClick={() => setActiveTab(activeTab === 'ingredients' ? null : 'ingredients')}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-cream transition-colors duration-200"
              aria-expanded={activeTab === 'ingredients'}
            >
              <span className="luxury-label text-[9px] text-antrasit/70">6- İçindekiler</span>
              <ChevronDown
                size={14}
                className={`text-antrasit/40 transition-transform duration-300 ${
                  activeTab === 'ingredients' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeTab === 'ingredients' && (
              <div className="px-4 py-3 bg-cream/50 border-t border-cream-dark">
                <p className="font-sans text-xs text-antrasit/70 not-italic leading-relaxed">{product.ingredients}</p>
              </div>
            )}

            {/* 7- Uyarı Tab */}
            <button
              onClick={() => setActiveTab(activeTab === 'warning' ? null : 'warning')}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-cream transition-colors duration-200"
              aria-expanded={activeTab === 'warning'}
            >
              <span className="luxury-label text-[9px] text-antrasit/70">7- Uyarı</span>
              <ChevronDown
                size={14}
                className={`text-antrasit/40 transition-transform duration-300 ${
                  activeTab === 'warning' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeTab === 'warning' && (
              <div className="px-4 py-3 bg-cream/50 border-t border-cream-dark">
                <p className="font-sans text-xs text-antrasit/60 leading-relaxed">{product.warning}</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <a
          href={product.trendyolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#242426] text-offwhite font-sans text-xs uppercase tracking-luxury font-medium hover:bg-[#323235] transition-all duration-300 group/btn"
        >
          <span>ŞİMDİ Satın Al</span>
          <ExternalLink
            size={12}
            className="opacity-60 group-hover/btn:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </article>
  );
}