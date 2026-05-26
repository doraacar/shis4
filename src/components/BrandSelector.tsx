import type { Brand } from '../data/products';

interface Props {
  active: Brand | 'ALL';
  onChange: (brand: Brand | 'ALL') => void;
}

const brandCards: { id: Brand; image: string; alt: string }[] = [
  {
    id: 'TSUBAKI',
    image: '/gridtsub.png',
    alt: 'TSUBAKI',
  },
  {
    id: 'FINO',
    image: '/gridfino.png',
    alt: 'FINO Premium Touch',
  },
];

const filterBrands: { id: Brand | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'Tüm Ürünler' },
  { id: 'TSUBAKI', label: 'TSUBAKI' },
  { id: 'FINO', label: 'FINO' },
];

export default function BrandSelector({ active, onChange }: Props) {
  return (
    <section id="markalarimiz" className="py-20 lg:py-28 px-6 lg:px-10 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badge */}
        <p className="text-center font-sans font-semibold text-[11px] uppercase tracking-luxury text-neutral-800 mb-12">
          Tüm Ürünlerimiz Güvenlik Bandrolü ile Teslim Edilmektedir.
        </p>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="luxury-label text-gold text-[10px] block mb-4">
            Premium Bir Bakım İçin
          </span>
          <h2 className="luxury-heading text-3xl sm:text-4xl lg:text-5xl mb-4 uppercase tracking-wide">
            Markalarımız
          </h2>
          <div className="section-divider" />
        </div>

        {/* Brand Duo Grid - Equal Sizes */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-16">
          {brandCards.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onChange(brand.id)}
              className={`group relative w-full h-40 md:h-56 overflow-hidden border transition-all duration-300 bg-white flex items-center justify-center ${
                active === brand.id
                  ? 'border-antrasit shadow-md'
                  : 'border-cream-dark hover:border-antrasit/40 hover:shadow-sm'
              }`}
            >
              {/* Premium rendering with crisp edges */}
              <img
                src={brand.image}
                alt={brand.alt}
                style={{ imageRendering: 'crisp-edges' }}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {filterBrands.map((b) => (
            <button
              key={b.id}
              onClick={() => onChange(b.id)}
              className={`px-5 py-2 text-xs uppercase tracking-luxury font-medium font-sans border transition-all duration-200 ${
                active === b.id
                  ? 'bg-antrasit text-offwhite border-antrasit'
                  : 'bg-transparent text-antrasit/60 border-antrasit/20 hover:border-antrasit/60 hover:text-antrasit'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
