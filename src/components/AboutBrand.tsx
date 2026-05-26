import { Leaf, Award, FlaskConical, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: '150+ Yıllık Miras',
    text: '1872\'den bu yana Japon Saç Bakımında Üstün Teknoloji, Bilim ve İçeriğin Kusursuz Bileşiminden Doğan Formüller, Nesiller Boyu Sağlık, Güven ve Prestij Sembolü Olarak Kabul Görmektedir.Kusursuz ve Mükemmel Sonuçlar için Hemen Deneyin, Saçlarınıza hayat Verin.',
  },
  {
    icon: FlaskConical,
    title: 'İleri Teknoloji Ve Bilim',
    text: 'Tsubaki ve Fino Dünya\'nın Sayılı Araştırma ve Geliştirme Merkezlerinde Üretilen Özel Moleküler Formülleri ile Saç Sağlığını Kökünden Uca Destekleyerek Dönüştürücü Sonuçlar Sunar.',
  },
  {
    icon: Leaf,
    title: 'Doğa ile Uyum',
    text: 'Japonya\'nın Botanik Hazinelerinden Kamelia Çiçeği, Sakura Çiçeği ve Birçok Eşsiz Doğal Bitkinin Özü, Yağı, Tohumu ve Benzeri İçeriklerinin Modern Biyoteknoloji ile Harmanlanması ile Üretilen Eşsiz Ürünlerimiz Her Damlası ile Saç Bakımda Doğa\'nın Gücünü Hissetmenizi Sağlar. Keyfini Çıkarın….',
  },
  {
    icon: Globe,
    title: 'Küresel Prestij',
    text: '88 Ülkede Saç Bakımı için Güvenle Kullanılan bir NUMARA’lı Markalar TSUBAKİ ve FİNO Şimdi Türkiye’de !..',
  },
];

export default function AboutBrand() {
  return (
    <section id="hakkimizda" className="py-20 lg:py-32 px-6 lg:px-10 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 lg:mb-28">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/yeni_foto.jpg"
                alt="Shiseido Studio Premium Saç Bakımı"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/30 pointer-events-none" />
            {/* Badge */}
            <div className="absolute top-6 -right-4 lg:-right-8 bg-[#242426] text-offwhite px-5 py-4 text-center">
              <span className="luxury-label text-[8px] text-gold block mb-1">Kuruluş</span>
              <span className="font-serif text-2xl font-bold text-offwhite">1872</span>
            </div>
          </div>

          {/* Right: Editorial Text */}
          <div className="flex flex-col justify-center lg:pt-16">
            <span className="luxury-label text-gold text-[10px] block mb-5">
              MARKA HAKKINDA
            </span>
            <h2 className="luxury-heading text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
              JAPONYA'NIN
              <br />
              <em className="font-serif font-normal text-gold">GÜZELLİK SIRRI</em>
            </h2>
            <p className="font-serif text-base sm:text-lg text-antrasit/70 mb-2">
              Japon Güzelliğinin Zamansız Dokunuşu
            </p>
            <p className="font-serif text-base sm:text-lg text-antrasit/70 mb-6">
              Üstün Teknoloji ve Eşsiz İçerik
            </p>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-sans text-sm text-antrasit/60 leading-relaxed mb-8">
              Japon bakım ritüellerinden ilham alan SHISEIDO, saç bakımını yalnızca bir rutin değil, zarafet ve bakımın birleştiği özel bir deneyim olarak sunar. Geleneksel Japon güzellik anlayışını modern teknoloji ve eşsiz içerik ile buluşturan seçkin ürünlerimiz, saçlarınıza salon kalitesinde bakım kazandırır.
            </p>

            {/* Series Highlights */}
            <div className="space-y-6 mb-10">
              <div>
                <h4 className="luxury-label text-gold text-[10px] block mb-2">TSUBAKI KOLEKSİYONU</h4>
                <p className="font-sans text-sm text-antrasit/60 leading-relaxed">
                  Japon kamelya çiçeğinin değerli özlerinden elde edilen yoğun bakım formülüyle saç tellerini derinlemesine besler. Nemini kaybetmiş, mat ve yıpranmış saçlara ipeksi bir yumuşaklık ve göz alıcı bir parlaklık kazandırır.
                </p>
              </div>
              <div>
                <h4 className="luxury-label text-gold text-[10px] block mb-2">FINO PREMIUM TOUCH SERİSİ</h4>
                <p className="font-sans text-sm text-antrasit/60 leading-relaxed">
                  Profesyonel saç bakım deneyimini ev ortamına taşımak için geliştirildi. Zengin içerikleri sayesinde saçları ağırlaştırmadan onarır, elektriklenmeyi azaltır ve her kullanımda daha sağlıklı bir görünüm sunar.
                </p>
              </div>
              <div>
                <h4 className="luxury-label text-gold text-[10px] block mb-2">JAPON BAKIM FELSEFESİ</h4>
                <p className="font-sans text-sm text-antrasit/60 leading-relaxed">
                  Doğadan ilham alan Japon bakım felsefesiyle geliştirilen ürünlerimiz, saçlarınıza sadece bakım yapmakla kalmaz; kendinizi daha özel ve güçlü hissetmenizi sağlar.
                </p>
              </div>
            </div>

            {/* Brand Stats Footer */}
            <p className="luxury-heading text-lg sm:text-xl text-antrasit/80 tracking-widest text-center lg:text-left">
              <span className="font-bold">88</span> ÜLKE   •   <span className="font-bold">150+</span> YIL
            </p>
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="border-t border-cream-dark pt-16 lg:pt-20">
          <div className="text-center mb-12">
            <span className="luxury-label text-gold text-[10px] block mb-3">Değerlerimiz</span>
            <h3 className="luxury-heading text-2xl sm:text-3xl">
              Neden TSUBAKİ ve FİNO ?
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="group text-center lg:text-left">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/40 mb-5 mx-auto lg:mx-0 group-hover:bg-[#242426] group-hover:border-[#242426] transition-all duration-300">
                    <Icon size={16} className="text-gold group-hover:text-offwhite transition-colors duration-300" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-antrasit mb-3">{pillar.title}</h4>
                  <p className="font-sans text-xs text-antrasit/50 leading-relaxed">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
