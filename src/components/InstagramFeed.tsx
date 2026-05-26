import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramCTA: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Minimalist İkon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/40 border border-cream-dark/30 text-[#B8935A] mb-6 transition-transform duration-500 hover:scale-110">
          <Instagram size={20} strokeWidth={1.5} />
        </div>

        {/* Başlıklar */}
        <span className="luxury-label text-[10px] tracking-luxury text-[#B8935A] block mb-3">
          SOSYAL MEDYA HESABIMIZ
        </span>
        
        <h2 className="luxury-heading text-2xl md:text-3xl text-antrasit mb-4 leading-tight">
          Japon Güzellik Ritüellerini <br className="hidden sm:inline" /> 
          Yakından Takip Edin
        </h2>
        
        <p className="font-sans text-xs md:text-sm text-antrasit/60 max-w-lg mx-auto leading-relaxed mb-8">
          En yeni koleksiyonlar, özel saç bakım ipuçları ve saçınızın ihtiyacı olan tüm lüks deneyimler canlı akışımızda sizi bekliyor.
        </p>

        {/* Lüks Buton */}
        <a
          href="https://www.instagram.com/mystudiotr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#242426] text-offwhite font-sans text-xs uppercase tracking-luxury font-medium hover:bg-[#323235] transition-all duration-300 shadow-sm hover:shadow-md group"
        >
          <span>@mystudiotr Hesabını Takip Et</span>
          <Instagram size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>

      </div>
    </section>
  );
};

export default InstagramCTA;