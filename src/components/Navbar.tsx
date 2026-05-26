import { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Markalarımız', href: '#markalarimiz' },
  { label: 'Marka Hakkında', href: '#hakkimizda' },
  { label: 'İLETİŞİM', href: '#iletisim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-offwhite/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Main nav row */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-[80px]">
            {/* Logo */}
            <button
              onClick={() => handleLink('#hero')}
              className="flex items-center leading-none group"
            >
              <img
                src="/logo2.png"
                alt="My Studio"
                className="h-14 md:h-16 lg:h-20 object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="font-sans text-sm uppercase tracking-wide font-medium text-antrasit/70 hover:text-antrasit transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Instagram + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/mystudiotr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                aria-label="Instagram @mystudiotr"
              >
                <Instagram
                  size={16}
                  className="text-antrasit/60 group-hover:text-gold transition-colors duration-200"
                />
                <span className="hidden sm:block font-sans text-sm text-antrasit/60 group-hover:text-antrasit transition-colors duration-200 tracking-wide">
                  @mystudiotr
                </span>
              </a>

              <button
                className="lg:hidden p-1 text-antrasit"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menüyü aç/kapat"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Premium metallic band underneath nav — only visible when scrolled */}
        <div
          className={`w-full border-b-2 transition-all duration-500 ${scrolled ? 'opacity-100 h-[6px]' : 'opacity-0 h-0'}`}
          style={{
            background: 'linear-gradient(to right, #DCDCDE, #EFEFEF, #F5F5F7, #E8E8EA, #F5F5F7, #EFEFEF, #DCDCDE)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(180,175,170,0.25)',
            borderBottomColor: '#D1D1D6',
          }}
        />
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-offwhite transition-transform duration-500 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <nav className="flex flex-col gap-8 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left font-serif text-3xl text-antrasit hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="border-t border-cream-dark pt-6">
            <a
              href="https://www.instagram.com/mystudiotr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-antrasit/70 hover:text-antrasit transition-colors"
            >
              <Instagram size={18} />
              <span className="font-sans text-sm tracking-wide">@mystudiotr</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
