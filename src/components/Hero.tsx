import { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import banner1 from '../assets/banner1.jpg.jpeg';
import banner2 from '../assets/banner2.jpg.jpeg';

const carouselSlides = [
  {
    id: 1,
    imageUrl: banner1,
    imageAlt: 'Premium Saç Bakım Koleksiyonu',
  },
  {
    id: 2,
    imageUrl: banner2,
    imageAlt: 'Japon Güzellik Koleksiyonu',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const slideTo = useCallback(
    (idx: number, dir: 'left' | 'right') => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setIsAnimating(false);
      }, 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    const idx = (current + 1) % carouselSlides.length;
    slideTo(idx, 'left');
  }, [current, slideTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = carouselSlides[current];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Editorial Hero Text Block */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <span className="luxury-label text-gold text-[13px] mb-6 animate-fade-in">
          Premium Japon Saç Bakımı
        </span>
        <h1 className="luxury-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl mb-4 max-w-4xl animate-slide-up">
  150 Yıllık
  <br />
  <em className="font-serif font-normal text-gold italic">
    {/* Ortası düz ve çizgisiz olan dik J harfini, CSS ile tam 15 derece sağa yatırarak lüks bir italik yapıyoruz */}
    <span className="not-italic inline-block [transform:skewX(-15deg)] origin-bottom mr-[2px]">J</span>
    <span>apon Mucizesi</span>
  </em>
</h1>
        <div className="section-divider" />
        <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-antrasit/70 mb-8 animate-slide-up">
          Artık Türkiye'de
        </p>
        <p className="font-sans text-sm text-antrasit/50 max-w-sm leading-relaxed mb-10 animate-fade-in">
          Shiseido'nun İkonik Saç Bakım Markalarıyla Tanışın. TSUBAKI Ve FINO, Şimdi Türkiye'de.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <button
            onClick={() => scrollToSection('#markalarimiz')}
            className="btn-luxury"
          >
            Koleksiyonu Keşfet
          </button>
          <button
            onClick={() => scrollToSection('#hakkimizda')}
            className="btn-luxury-outline"
          >
            Marka Hakkında
          </button>
        </div>
      </div>

      {/* Carousel Banner */}
      <div className="relative w-full h-auto min-h-0 max-w-full overflow-hidden px-4 md:px-8">
        <div className="relative w-full h-auto min-h-0 max-w-6xl xl:max-w-7xl mx-auto md:rounded-xl lg:rounded-2xl overflow-hidden">
          {/* Image */}
          <div
            className={`relative w-full h-auto min-h-0 transition-all duration-700 ${
              isAnimating
                ? direction === 'left'
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.imageAlt}
              className="w-full h-auto object-cover md:object-contain max-w-full mx-auto block"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i, i > current ? 'left' : 'right')}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-1.5 bg-gold'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom spacing */}
      <div className="h-16 lg:h-24" />
    </section>
  );
}
