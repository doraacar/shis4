import { useState } from 'react';

export default function Newsletter() {
  const [formData, setFormData] = useState({
    ad_soyad: '',
    telefon: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="luxury-label text-gold text-[10px] tracking-luxury block mb-3">
            YENILIKLERDEN HABERDAR OLUN
          </span>
          <h2 className="luxury-heading text-2xl sm:text-3xl text-antrasit">
            Shiseido Studio Dünyasına Katılın
          </h2>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/mila@milatrading.co.uk"
          method="POST"
          className="md:flex md:flex-row gap-4 max-w-4xl mx-auto items-end"
        >
          {/* FormSubmit Hidden Fields */}
          <input type="hidden" name="_next" value={window.location.origin} />
          <input
            type="hidden"
            name="_subject"
            value="Yeni Web Sitesi Form Kaydı - Shiseido Studio"
          />
          <input type="hidden" name="_captcha" value="false" />

          {/* Ad Soyad */}
          <div className="flex-1 mb-4 md:mb-0">
            <label
              htmlFor="ad_soyad"
              className="block text-xs font-sans text-antrasit/60 mb-2 uppercase tracking-wide"
            >
              Ad Soyad
            </label>
            <input
              type="text"
              id="ad_soyad"
              name="ad_soyad"
              required
              value={formData.ad_soyad}
              onChange={handleChange}
              placeholder="Adınız ve Soyadınız"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-antrasit placeholder-gray-400 focus:border-[#B8935A] focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Telefon */}
          <div className="flex-1 mb-4 md:mb-0">
            <label
              htmlFor="telefon"
              className="block text-xs font-sans text-antrasit/60 mb-2 uppercase tracking-wide"
            >
              Telefon Numarası
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              required
              value={formData.telefon}
              onChange={handleChange}
              placeholder="0 5XX XXX XX XX"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-antrasit placeholder-gray-400 focus:border-[#B8935A] focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* E-Posta */}
          <div className="flex-1 mb-4 md:mb-0">
            <label
              htmlFor="email"
              className="block text-xs font-sans text-antrasit/60 mb-2 uppercase tracking-wide"
            >
              E-Posta Adresi
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@email.com"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-antrasit placeholder-gray-400 focus:border-[#B8935A] focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-[#242426] text-white hover:bg-[#323235] transition-all duration-300 font-sans uppercase tracking-wider text-xs font-medium px-8 py-3.5 h-[46px]"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </section>
  );
}
