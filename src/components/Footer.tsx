import { Instagram, Phone, MapPin, Building2 } from 'lucide-react';

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Markalarımız', href: '#markalarimiz' },
  { label: 'Marka Hakkında', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Footer() {
  const handleLink = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="iletisim" className="text-offwhite/80 bg-[#242426]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <span className="font-serif text-2xl font-medium text-offwhite tracking-wide block">
                SHISEIDO
              </span>
              <span className="luxury-label text-[9px] text-gold tracking-luxury mt-1 block">
              
              </span>
            </div>
            <p className="font-sans text-xs leading-relaxed mb-8 max-w-xs" style={{ color: '#D1D1D6' }}>
              150 Yıllık Japon Saç Bakım Mirasını Türkiye'ye Taşıyan Premium Saç Bakım Serisi
            </p>
            <a
              href="https://www.instagram.com/mystudiotr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
              aria-label="Instagram @mystudiotr"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-offwhite/20 group-hover:border-gold group-hover:bg-gold transition-all duration-300">
                <Instagram size={15} className="text-offwhite/60 group-hover:text-white transition-colors" />
              </div>
              <span className="font-sans text-xs group-hover:text-gold transition-colors tracking-wide" style={{ color: '#D1D1D6' }}>
                @mystudiotr
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="luxury-label text-[9px] text-gold mb-6">Sayfalar</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="font-sans text-xs hover:text-offwhite transition-colors text-left tracking-wide" style={{ color: '#D1D1D6' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://www.trendyol.com/magaza/shiseido-studio-m-929108?channelId=1&sst=0&sk=1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-gold/70 hover:text-gold transition-colors tracking-wide"
              >
                Trendyol Mağaza
              </a>
            </nav>
          </div>

          {/* Importer Info */}
          <div className="lg:col-span-4">
            <h4 className="luxury-label text-[9px] text-gold mb-6">Kurumsal Bilgiler</h4>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Building2 size={14} className="text-gold/60 shrink-0 mt-0.5" />
                <div>
                  <span className="luxury-label text-[9px] font-semibold block mb-1" style={{ color: 'white' }}>
                    İTHALATÇI FİRMA
                  </span>
                  <p className="font-sans text-xs font-medium mb-1" style={{ color: '#D1D1D6' }}>
                    GMAS Technology
                  </p>
                  <p className="font-sans text-[11px] leading-relaxed" style={{ color: '#D1D1D6' }}>
                    Orjin Plaza-Zemin Kat, Eski Büyüdere Cad. No:27
                    <br />
                    34485 Maslak Sarıyer, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={14} className="text-gold/60 shrink-0 mt-0.5" />
                <div>
                  <span className="luxury-label text-[9px] font-semibold block mb-1" style={{ color: 'white' }}>
                    DAĞITIM, LOJİSTİK & DEPOLAMA
                  </span>
                  <p className="font-sans text-xs font-medium mb-1" style={{ color: '#D1D1D6' }}>
                    PORT Tic. Danışmanlık
                  </p>
                  <p className="font-sans text-[11px] leading-relaxed" style={{ color: '#D1D1D6' }}>
                    Taksim 360, Tarlabaşı Bulv No 150-170
                    <br />
                    Taksim, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Building2 size={14} className="text-gold/60 shrink-0 mt-0.5" />
                <div>
                  <span className="luxury-label text-[9px] font-semibold block mb-1" style={{ color: 'white' }}>
                    SORUMLU TEKNİK FİRMA
                  </span>
                  <p className="font-sans text-xs font-medium mb-1" style={{ color: '#D1D1D6' }}>
                    RAINBOW Beauty Kozmetik
                  </p>
                  <p className="font-sans text-[11px] leading-relaxed" style={{ color: '#D1D1D6' }}>
                    Yenibosna Merkez Mah. Aydoğdu Sk.
                    <br />
                    Bahçelievler, İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="luxury-label text-[9px] text-gold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Phone size={13} className="text-gold/60 shrink-0 mt-0.5" />
                <div>
                  <span className="luxury-label text-[9px] font-semibold block mb-1" style={{ color: 'white' }}>
                    Danışma Hattı
                  </span>
                  <a
                    href="tel:+905333903999"
                    className="font-sans text-sm hover:text-gold transition-colors tracking-wide"
                    style={{ color: '#D1D1D6' }}
                  >
                    0 533 390 39 99
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone size={13} className="text-gold/60 shrink-0 mt-0.5" />
                <div>
                  <span className="luxury-label text-[9px] font-semibold block mb-1" style={{ color: 'white' }}>
                    Toptan Sipariş Hattı
                  </span>
                  <a
                    href="tel:+905323143626"
                    className="font-sans text-sm hover:text-gold transition-colors tracking-wide"
                    style={{ color: '#D1D1D6' }}
                  >
                    0 532 314 36 26
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="luxury-label text-[8px] block mb-2" style={{ color: '#D1D1D6' }}>
                  Sosyal Medya
                </span>
                <a
                  href="https://www.instagram.com/mystudiotr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs hover:text-gold transition-colors tracking-wide"
                  style={{ color: '#D1D1D6' }}
                >
                  <Instagram size={13} />
                  @mystudiotr
                </a>
              </div>

              <div className="pt-4 border-t border-offwhite/10 mt-4">
                <p className="font-sans text-[10px] leading-relaxed tracking-wide" style={{ color: '#999999' }}>
                  Tüm Ürünlerimiz T.C. Sağlık Bakanlığı Ürün Takip Sistemi'ne (ÜTS) kayıtlıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#242426]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] tracking-wide" style={{ color: '#999999' }}>
            © 2025 Shiseido Studio. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-[11px] tracking-wide" style={{ color: '#999999' }}>
  
          </p>
        </div>
      </div>
    </footer>
  );
}
