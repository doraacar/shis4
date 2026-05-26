import { Star } from 'lucide-react';

interface Review {
  id: number;
  userName: string;
  badge: string;
  rating: number;
  date: string;
  comment: string;
  productInfo: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    userName: "Cristina A.",
    badge: "Doğrulanmış Alıcı",
    rating: 5,
    date: "14 Mayıs 2026",
    productInfo: "Tsubaki Premium Conditioner",
    comment: "Çok güzel,saçlarım açık sarı,hep boyadım için yıparandı,bu şampuan dan sonra yumuşacık yaptı,hem şampuanı hem saç kremi kullanıyorum,çok iyi geldi saçıma."
  },
  {
    id: 2,
    userName: "Zeynep Y.",
    badge: "Doğrulanmış Alıcı",
    rating: 5,
    date: "19 Nisan 2026",
    productInfo: "Fino Premium Touch Hair Mask",
    comment: "İnanılmaz bir satıcı! Eksik ürünümü hemen gönderdikleri yetmezmiş gibi yanına bir de Shiseido Fino saç maskesi hediye etmişler. Fino maske zaten bir efsane, saçları ipek gibi yapıyor. Bu kadar nazik ve profesyonel bir yaklaşım için çok teşekkür ederim. Hem ürün orijinal hem de hizmet 10 numara. Gözü kapalı alışveriş yapabilirsiniz!"
  },
  {
    id: 3,
    userName: "Merve A.",
    badge: "Doğrulanmış Alıcı",
    rating: 5,
    date: "10 Mayıs 2026",
    productInfo: "Fino Premium Touch Hair Mask 230g",
    comment: "Anneme aldım cok memnun oldu cok kaliteli kesinlikle hangi saticidan aldiginiza dikkat edin. Cok hizli geldi ve hasarsiz orjinal urun. Cok tesekkur ederim."
  },
  {
    id: 4,
    userName: "Buse T.",
    badge: "Doğrulanmış Alıcı",
    rating: 5,
    date: "08 Mayıs 2026",
    productInfo: "TSUBAKI MASK 180G. GOLDEN JAR",
    comment: "cok hizli geldi. cok memnunuz"
  },
  {
    id: 5,
    userName: "Aslı G.",
    badge: "Doğrulanmış Alıcı",
    rating: 5,
    date: "05 Mayıs 2026",
    productInfo: "Fino Premium Touch Hair Oil 70ml",
    comment: "Saçlarım çok yıpranmıştı, etkisi keratin bakımının da üstünde çok memnun kaldım, en önemlisi bandrollü orijinal ürün, şampuanları da deneyeceğim, teşekkürler"
  }
];

export default function TestimonialsMarquee() {
  const doubleReviews = [...mockReviews, ...mockReviews];

  return (
    <section className="w-full bg-white py-16 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="luxury-label text-[10px] tracking-luxury text-gold block mb-2">MÜŞTERİ DENEYİMLERİ</span>
        <h2 className="luxury-heading text-2xl text-antrasit">Trendyol'da Bizim İçin Ne Dediler?</h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 whitespace-nowrap pr-6 will-change-transform group-hover:[animation-play-state:paused]">
          {doubleReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[380px] shrink-0 bg-white border border-gray-100 p-6 flex flex-col justify-between whitespace-normal shadow-sm transition-all duration-300 hover:border-antrasit/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans font-medium text-xs text-antrasit">{review.userName}</span>
                  <span className="text-[9px] font-sans font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                    {review.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#B8935A" color="#B8935A" />
                    ))}
                  </div>
                  <span className="text-[10px] font-sans text-antrasit/40">{review.date}</span>
                </div>

                <span className="text-[9px] font-sans font-medium tracking-wide text-antrasit/50 block mb-2.5 uppercase bg-cream/30 px-2 py-1 border border-cream-dark/20 w-fit">
                  {review.productInfo}
                </span>

                <p className="font-sans text-xs text-antrasit/70 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
