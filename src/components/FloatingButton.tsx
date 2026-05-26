import { useState, useEffect } from 'react';
import { Instagram, ArrowUp, Mail, MessageCircle } from 'lucide-react';

export default function FloatingButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Yukarı çık"
        className={`w-10 h-10 flex items-center justify-center bg-offwhite border border-cream-dark text-antrasit hover:bg-antrasit hover:text-offwhite hover:border-antrasit transition-all duration-300 shadow-sm ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={16} />
      </button>

      {/* Communication Stack */}
      <div className="flex flex-col gap-3 items-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905333903999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          className="w-11 h-11 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={20} />
        </a>

        {/* Mail Button */}
        <a
          href="mailto:mila@milatrading.co.uk"
          aria-label="E-posta gönder"
          className="w-11 h-11 flex items-center justify-center bg-[#242426] text-offwhite border border-gold/30 rounded-full shadow-lg hover:scale-110 hover:bg-neutral-700 transition-all duration-300"
        >
          <Mail size={20} className="text-gold" />
        </a>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/mystudiotr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @mystudiotr"
          className="w-11 h-11 flex items-center justify-center bg-[#242426] text-offwhite rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <Instagram size={20} className="text-gold" />
        </a>
      </div>
    </div>
  );
}
