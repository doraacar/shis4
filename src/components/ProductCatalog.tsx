import { useMemo } from 'react';
import { products } from '../data/products';
import type { Brand } from '../data/products';
import ProductCard from './ProductCard';

interface Props {
  activeBrand: Brand | 'ALL';
}

export default function ProductCatalog({ activeBrand }: Props) {
  const filtered = useMemo(
    () =>
      activeBrand === 'ALL'
        ? products
        : products.filter((p) => p.brand === activeBrand),
    [activeBrand]
  );

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-10 bg-offwhite-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="luxury-label text-gold text-[10px] block mb-2">
              {activeBrand === 'ALL' ? 'Koleksiyonu Keşfedin' : `${activeBrand} Serisi`}
            </span>
            <h2 className="luxury-heading text-2xl sm:text-3xl">
              {activeBrand === 'ALL'
                ? 'Tüm Ürünler'
                : `${activeBrand} Koleksiyonu`}
            </h2>
          </div>
          <span className="font-sans text-xs text-antrasit/40 tracking-wide">
            {filtered.length} ürün
          </span>
        </div>

        {/* Grid */}
        <div
          key={activeBrand}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-dark border border-cream-dark"
        >
          {filtered.map((product) => (
            <div key={product.id} className="bg-offwhite">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-sans text-xs text-antrasit/40 mb-5 tracking-wide">
            Tüm koleksiyonu mağazamızda görüntüleyin
          </p>
          <a
            href="https://www.trendyol.com/magaza/shiseido-studio-m-929108?channelId=1&sst=0&sk=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-outline text-xs"
          >
            Trendyol Mağazamızı Ziyaret Et
          </a>
        </div>
      </div>
    </section>
  );
}
