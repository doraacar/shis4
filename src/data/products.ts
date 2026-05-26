export type Brand = 'TSUBAKI' | 'FINO';

export interface Product {
  id: string;
  brand: Brand;
  name: string;
  subtitle: string;
  concern: string;
  description: string;
  barcode: string;       // Akordeon için yeni eklenen barkod alanı
  usage: string[];      // Kullanım şekli (Dizi formatında)
  ingredients: string;  // Akordeon için yeni eklenen içindekiler alanı
  warning: string;      // Akordeon için yeni eklenen uyarı alanı
  trendyolUrl: string;
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  tag?: string;
}

const STORE_URL =
  'https://www.trendyol.com/magaza/shiseido-studio-m-929108?channelId=1&sst=0&sk=1';

export const products: Product[] = [
  // TSUBAKI SERIES (8 products)
  // Row 1 — Shampoos (Gold, Red, Black)
  {
    id: 'tsubaki-2',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium Moist & Repair Shampoo 450ml',
    subtitle: 'TSUBAKI PREMIUM NEMLENDİRİCİ VE YOĞUN ONARICI ŞAMPUAN ',
    concern: 'Hasarlı & Kırılgan Saçlar',
    description: 'Kökten uca yoğun hasar görmüş saçlar için geliştirilmiştir. İyonik onarım teknolojisi ve içeriğindeki değerli yağlar ile saçı nazikçe temizlerken yapılandırır.',
    barcode: '4550516485236',
    usage: [
      ' Islak saça masaj yaparak uygulayınız, köpürtünüz ve bol su ile durulayınız. Günlük kullanıma uygundur.',
    ],
    ingredients: ' Water (Aqua),  Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycol Distearate, Guar Hydroxypropyltrimonium Chloride, Propyltrimoniumchloride Acrylamide/Dimethylacrylamide Copolymer, Polyquaternium-10, Squalane, Camellia Japonica Seed Oil, Sodium Dilauramidoglutamide Lysine, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Phytosteryl Macadamiate, Glycine Soja (Soybean) Seed Extract, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Sodium Acetylated Hyaluronate, Peg-2 Laurate, Sodium Sulfate, Dipropylene Glycol, Lauric Acid, Salicylic Acid,  Citric Acid, Disodium Edta, Dimethiconol, Laurtrimonium Chloride, Butylene Glycol, Sodium Lauryl Sulfate, Tocopherol, Phenoxyethanol, Sodium Benzoate, Parfum',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu2.jpeg',
    imageAlt: 'Tsubaki Premium Repair Saç Maskesi',
    accentColor: '#C4736A',
  },
  {
    id: 'tsubaki-4',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium Volume & Repair Shampoo 450ml',
    subtitle: 'TSUBAKI PREMIUM HACİM VEREN ONARICI ŞAMPUAN ',
    concern: 'Mat & Donuk Saçlar',
    description: 'Sönük, cansız ve yıpranmış saçlar için geliştirilmiştir. İçeriğindeki Taurin ve özel polimerler sayesinde saçı ağırlaştırmadan kökten uca hacim ve esneklik kazandırır.',
    barcode: '4550516485410',
    usage: ['Islak saça masaj yaparak uygulayınız, köpürtünüz ve bol su ile durulayınız.'],
    ingredients: 'Water (Aqua), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Guar Hydroxypropyltrimonium Chloride, Peg-60 Hydrogenated Castor Oil, Polyquaternium-10, Sodium Methyl Cocoyl Taurate, Aspartic Acid, Camellia Japonica Seed Oil, Polyquaternium-11, Sodium Dilauramidoglutamide Lysine, Taurine, . Phytosteryl/Octyldodecyl Lauroyl Glutamate, Phytosteryl Macadamiate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Squalane, Peg-2 Laurate, Sodium Sulfate, Dipropylene Glycol, Isostearyl Alcohol, Salicylic Acid, Disodium Edta, : Laurtrimonium Chloride , Citric Acid, Tocopherol, Phenoxyethanol, Sodium Benzoate, Parfum  ',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu4.jpeg',
    imageAlt: 'Tsubaki Luminous Shampoo',
    accentColor: '#C4736A',
  },
  {
    id: 'tsubaki-6',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium Ex Damage Care & Repair Shampoo 450ml',
    subtitle: 'TSUBAKI PREMIUM YOĞUN BESLEYİCİ VE ONARICI ŞAMPUAN',
    concern: 'Nem & Koruma',
    description: 'Kuru, mat ve zor şekil alan saçlar için geliştirilmiştir. İçeriğindeki Arı Sütü ve Skualan ile saçı nemlendirerek dipten uca parlaklık kazandırır. ',
    barcode: '4550516485830',
    usage: [' Islak saça masaj yaparak uygulayınız, köpürtünüz ve bol su ile durulayınız. Günlük kullanıma uygundur.'],
    ingredients: 'Water (Aqua), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycol Distearate, Sorbitol, Glycerin, Guar Hydroxypropyltrimonium Chloride, Dihydroxypropyl Arginine Hcl, Polyquaternium-10, Hydroxyethyl Urea, Lactic Acid, Squalane, Camellia Japonica Seed Oil, Sodium Dilauramidoglutamide Lysine, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Phytosteryl Macadamiate, Lauric Acid, Glyceryl Stearate, Royal Jelly Extract, Glycine Soja (Soybean) Seed Extract, Camellia Sinensis (Tea) Leaf Extract, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Sodium Acetylated Hyaluronate, Hydrolyzed Conchiolin Protein, Peg-2 Laurate, Sodium Sulfate, Dipropylene Glycol (Dpg), Lauric Acid, Salicylic Acid, Citric Acid, Disodium Edta, Ethanol, Laurtrimonium Chloride, Butylene Glycol (Bg), Ammonium Lactate, Amodimethicone, Ppg-2-Deceth-12, Tocopherol, Phenoxyethanol, Sodium Benzoate, Fragrance (Parfum)',
    warning: ' Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu6.jpeg',
    imageAlt: 'Tsubaki Hair Oil',
    accentColor: '#C4736A',
  },
  // Row 2 — Conditioners / Hair Milks (Gold, Red, Black)
  {
    id: 'tsubaki-3',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium Moist & Repair Conditioner 450ml',
    subtitle: 'TSUBAKI PREMIUM NEMLENDİRİCİ VE YOĞUN ONARICI SAÇ BAKIM KREMİ',
    concern: 'Çatallaşma & Kırılma',
    description: 'Kuru, mat ve elektriklenen saçlar için özel olarak formüle edilmiştir. İçeriğindeki değerli Tsubaki (Kamelya) yağı ve nemlendirici bileşenler sayesinde saç tellerinin kaybettiği nemi geri kazanmasına yardımcı olur. Saç yüzeyini pürüzsüzleştirerek ışığı daha iyi yansıtmasını ve doğal bir parlaklık kazanmasını hedefler. Saçı ağırlaştırmadan yumuşatır, kolay taranmasını sağlar ve kırılmalara karşı direncini artırmaya yardımcı olur.',
    barcode: '4550516485250',
    usage: [
      'Şampuan sonrasında ıslaklığı hafifçe alınmış saça uygulayınız. Pompa başlığını kullanarak avucunuza aldığınız yeterli miktarda ürünü, saçın boy ve uçlarına nazikçe masaj yaparak yediriniz. Ürünün saç tellerine nüfuz etmesi için 1-2 dakika bekledikten sonra bol su ile durulayınız. Günlük kullanıma uygundur.',
    ],
    ingredients: ' Water (Aqua), Stearyl Alcohol, Isopentyldiol, Behentrimonium Chloride, Glycerin, Dimethicone, Aminopropyl Dimethicone, Polysilicone-13, Steartrimonium Chloride, Squalane, Camellia Japonica Seed Oil, Sodium Dilauramidoglutamide Lysine, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Phytosteryl Macadamiate, Glycine Soja (Soybean) Seed Extract, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Lactic Acid, Sodium Acetylated Hyaluronate, Cetyl Alcohol, Isopropyl Alcohol, Dipropylene Glycol, Isopropyl Myristate, Peg-2 Laurate, Sodium Methyltaurate, Salicylic Acid, C13-16 Isoparaffin, Laurtrimonium Chloride, C10-13 Isoparaffin, Disodium Edta, Cetrimonium Chloride, Butylene Glycol, Amodimethicone, Ppg-2-Deceth-12, Tocopherol, Sodium Benzoate, Phenoxyethanol, Fragrance (Parfum)',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu3.jpeg',
    imageAlt: 'Tsubaki Premium Conditioner',
    accentColor: '#C4736A',
    tag: 'Yeni',
  },
  {
    id: 'tsubaki-5',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium Volume & Repair Conditioner 450ml',
    subtitle: 'TSUBAKI PREMIUM HACİM VEREN ONARICI SAÇ KREMİ ',
    concern: 'Derin Beslenme',
    description: 'Kuru, mat ve elektriklenen saçlar için geliştirilmiştir. Saçın nem dengesini sağlayarak kökten uca parlaklık ve yumuşaklık kazandırır. ',
    barcode: '4550516485632',
    usage: ['Şampuanlama sonrası ıslak saçın boy ve uçlarına masaj yaparak uygulayınız. Etkisini göstermesi için 1-2 dakika bekledikten sonra bol su ile durulayınız.'],
    ingredients: 'Water (Aqua), Isopentyldiol, Behentrimonium Chloride, Glycerin, Stearyl Alcohol, Behenyl Alcohol, Dimethicone, Cetyl Alcohol, Aminopropyl Dimethicone, Steartrimonium Chloride, Polysilicone-13, Squalane, Aspartic Acid, Camellia Japonica Seed Oil, Polyquaternium-11, Lactic Acid, Sodium Dilauramidoglutamide Lysine, Taurine, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Hydrolyzed Collagen, Isopropanol, Dipropylene Glycol (Dpg), Isopropyl Myristate, Peg-2 Laurate, Amodimethicone, Sodium Methyl Cocoyl Taurate , Salicylic Acid, Ppg-2-Deceth-12, Laurtrimonium Chloride, C13–16 Isoparaffin, Disodium Edta, C10–13 Isoparaffin, Cetrimonium Chloride, Tocopherol, Sodium Benzoate, Phenoxyethanol, Fragrance (Parfum), Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu5.jpeg',
    imageAlt: 'Tsubaki Intensive Mask',
    accentColor: '#C4736A',
  },
  {
    id: 'tsubaki-7',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium Ex Damage Care & Repair Conditioner 450ml',
    subtitle: 'TSUBAKI PREMIUM YOĞUN BESLEYİCİ VE ONARICI SAÇ BAKIM KREMİ',
    concern: 'Elektriklenme & Çatallık',
    description: 'Yıpranmış saçlar için geliştirilmiş iyonik onarım teknolojisine sahiptir. İçeriğindeki Arı Sütü, Kamelya Yağı ve Çay Yaprağı özleri ile saçı kökten uca onarır ve yumuşatır.',
    barcode: '4550516485977  ',
    usage: [' Şampuan sonrası ıslak saçın boy ve uçlarına uygulayınız. 3-4 dakika bekledikten sonra bol su ile durulayınız.'],
    ingredients: 'Water (Aqua), Stearyl Alcohol, Isopentyldiol, Behentrimonium Chloride, Glycerin, Dimethicone, Sorbitol, Aminopropyl Dimethicone, Hydroxyethyl Urea, Polysilicone-13, Steartrimonium Chloride, Lactic Acid, Squalane, Camellia Japonica Seed Oil, Sodium Dilauramidoglutamide Lysine, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Hydrolyzed Collagen , Royal Jelly Extract, Glycine Soja (Soybean) Seed Extract, Camellia Sinensis Leaf Extract, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Sodium Acetylated Hyaluronate, Hydrolyzed Conchiolin Protein, Cetyl Alcohol, Dipropylene Glycol, Isopropyl Alcohol, Isopropyl Myristate, Sodium Methyl Cocoyl Taurate , Peg-2 Laurate, Salicylic Acid, C13-16 Isoparaffin, Laurtrimonium Chloride, C10-13 Isoparaffin, Disodium Edta, Butylene Glycol, Ammonium Lactate, Cetrimonium Chloride, Alcohol, Amodimethicone, Ppg-2-Deceth-12, Tocopherol, Sodium Benzoate, Phenoxyethanol, Parfum.',
    warning: ' Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu7.jpeg',
    imageAlt: 'Tsubaki Smooth Serum',
    accentColor: '#C4736A',
  },
  // Row 3 — Hair Masks
  {
    id: 'tsubaki-1',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Premium EX Repair Mask 180g',
    subtitle: 'TSUBAKI PREMIUM YOĞUN ONARICI SAÇ BAKIM MASKESİ',
    concern: 'Kuru & Yıpranmış Saçlar',
    description: 'Yıpranmış ve işlem görmüş saçlar için özel olarak geliştirilmiş bu yoğun bakım kürü, saçın kaybettiği nemi geri kazanmasına yardımcı olur. Zenginleştirilmiş Tsubaki (Kamelya Çiçeği) özleri içeren formülü ile saç tellerini kökten uca onarmayı, pürüzsüzleştirmeyi ve doğal bir parlaklık kazandırmayı hedefler. Saçın elastikiyetini artırarak kırılmalara karşığunmasına ve kolay taranmasına destek olur.',
    barcode: '4550516491190',
    usage: [
      'Şampuanlama işleminden sonra saçın fazla nemini alınız. Fındık büyüklüğünde veya saç yoğunluğuna göre uygun miktarda ürünü, saçın boy ve uçlarına masaj yaparak iyice yediriniz. Etkili bir onarım ve nüfuz etme için 2-3 dakika bekledikten sonra bol su ile iyice durulayınız. Günlük kullanıma uygundur.',
    ],
    ingredients: 'Water (Aqua), Glycerin, Dimethicone, Isopentyldiol, Hydrogenated Rapeseed Alcohol, Behentrimonium Chloride, Stearyl Alcohol, Sorbitol, Isopropyl Alcohol, Cetyl Alcohol, Aminopropyl Dimethicone, Phenoxyethanol, Fragrance (Parfum), Hydroxyethyl Urea, Hydroxypropyl Arginine Lauryl/Myristyl Ether Hcl, Sodium Benzoate, Octyldodecanol, Steartrimonium Chloride, Alcohol, Lactic Acid, Citric Acid, Ammonium Lactate, Camellia Japonica Seed Oil, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Butylene Glycol, Sodium Dilauramidoglutamide Lysine, Dipropylene Glycol, Aminomethyl Propanol, Yellow 5 (Ci 19140), Royal Jelly Extract, Amodimethicone, Ppg-2- Deceth-12, Red 33 (Ci 17200), Sodium Acetylated Hyaluronate, Hydrolyzed Conchiolin Protein, Tocopherol',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde bol su ile yıkayınız. Çocukların ulaşamayacağı yerde, direkt güneş ışığından uzak ve oda sıcaklığında muhafaza ediniz. İçerisindeki bileşenlerden herhangi birine alerjiniz varsa kullanmayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu1.jpeg',
    imageAlt: 'Tsubaki Premium Moist Şampuan',
    accentColor: '#C4736A',
    tag: 'Çok Satan',
  },
  {
    id: 'tsubaki-8',
    brand: 'TSUBAKI',
    name: 'TSUBAKI Sakura Premium Ex Repair Deep Nourishing Mask 180g',
    subtitle: 'TSUBAKI PREMIUM YOĞUN NEMLENDİRİCİ SAÇ BAKIM MASKESİ',
    concern: 'Isı Hasarı & Işın',
    description: 'Yıpranmış ve işlem görmüş saçlar için özel olarak geliştirilmiş bu yoğun bakım kürü, saçın kaybettiği nemi geri kazanmasına yardımcı olur. Zenginleştirilmiş Tsubaki (Sakura ve Kamelia Çiçeği) özleri içeren formülü ile saç tellerini kökten uca onarmayı, pürüzsüzleştirmeyi ve doğal bir parlaklık kazandırmayı hedefler. Saçın elastikiyetini artırarak kırılmalara karşı korunmasına ve kolay taranmasına destek olur.',
    barcode: '4550516711106',
    usage: ['Şampuanlama işleminden sonra saçın fazla nemini alınız. Fındık büyüklüğünde veya saç yoğunluğuna göre uygun miktarda ürünü, saçın boy ve uçlarına masaj yaparak iyice yediriniz. Etkili bir onarım ve nüfuz etme için 2-3 dakika bekledikten sonra bol su ile iyice durulayınız. Günlük kullanıma uygundur.'],
    ingredients: 'Water (Aqua), Glycerin, Dimethicone, Isopentyldiol, Hydrogenated Rapeseed Alcohol, Behentrimonium Chloride, Stearyl Alcohol, Sorbitol, Isopropyl Alcohol, Cetyl Alcohol, Aminopropyl Dimethicone, Phenoxyethanol, Fragrance (Parfum), Hydroxyethyl Urea, Hydroxypropyl Arginine Lauryl/Myristyl Ether Hcl, Sodium Benzoate, Octyldodecanol, Steartrimonium Chloride, Alcohol, Lactic Acid, Citric Acid, Ammonium Lactate, Camellia Japonica Seed Oil, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Butylene Glycol, Sodium Dilauramidoglutamide Lysine, Dipropylene Glycol, Aminomethyl Propanol, Yellow 5 (Ci 19140), Royal Jelly Extract, Amodimethicone, Ppg-2- Deceth-12, Red 33 (Ci 17200), Sodium Acetylated Hyaluronate, Hydrolyzed Conchiolin Protein, Tocopherol',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde bol su ile yıkayınız. Çocukların ulaşamayacağı yerde, direkt güneş ışığından uzak ve oda sıcaklığında muhafaza ediniz. İçerisindeki bileşenlerden herhangi birine alerjiniz varsa kullanmayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/tsu8.jpg',
    imageAlt: 'Tsubaki Defense Treatment',
    accentColor: '#C4736A',
  },
  // FINO SERIES (4 products)
  {
    id: 'fino-1',
    brand: 'FINO',
    name: 'Fino Premium Touch Hair Mask 230g',
    subtitle: 'FINO PREMIUM ONARICI SAÇ MASKESİ ',
    concern: 'Derinlemesine Onarım & Parlaklık',
    description: 'Yıpranmış saçlar için geliştirilmiş, bekleme süresi gerektirmeyen yoğun bakım maskesidir. Saça uygulandığı anda nüfuz eder ve nemi hapseder. ',
    barcode: '4550516493583',
    usage: [
      'Şampuan sonrası ıslak saçın uçlarına uygulayınız ve  Ürünü saçınızda 5–10 dakika bekleterek içeriklerin saç telinde etki etmesini sağlayın. Ilık suyla maskeyi tamamen durulayın.. Haftada 1-2 kez kullanılması önerilir.Saç maskesini daha etkili kılmak için, saçınızın üzerine bir duş bonesi takarak ısıyı hafifçe hapsedebilir veya maskeyi biraz daha uzun bekletebilirsiniz.',
    ],
    ingredients: 'Water (Aqua), Sorbitol, Dimethicone, Isopentyldiol, Behenyl Alcohol, Behentrimonium Chloride, Stearyl Alcohol, Aminopropyl Dimethicone, Alkyl (C12,14) Oxyhydroxypropyl Arginine Hci, Squalane, Steartrimonium Chloride, Glutamic Acid, Trehalose, Peg-90M, Pca, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Royal Jelly Extract, Lactic Acid, Hydrolyzed Conchiolin Protein,  Isopropanol, Cetanol, Ethanol, Octyldodecanol, Salicylic Acid, Edta-2Na, Bg, Amodimethicone, Ppg-2-Deceth-12, Silica, Glycerin, Bht, Tocopherol, Phenoxyethanol, Sodium Benzoate, Fragrance, 5  Ci 15985 (Yellow).',
    warning: ' Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz. İçine su girmemesine dikkat ediniz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/fin1.jpeg',
    imageAlt: 'Fino Premium Touch Hair Mask',
    accentColor: '#7A8C7A',
    tag: 'En Favori',
  },
  {
    id: 'fino-2',
    brand: 'FINO',
    name: 'Fino Premium Touch Hair Oil 70ml',
    subtitle: 'FINO PREMIUM TOUCH ONARICI SAÇ BAKIM YAĞI',
    concern: 'Nem Dengesi & Ipeksi Görünüm',
    description: 'Yoğun onarıcı etkisiyle saçın pürüzsüzlüğünü ve parlaklığını artırır. Hafif yapısıyla saçı ağırlaştırmadan elektriklenmeyi önler.',
    barcode: '4901872471997',
    usage: [
      'Yarı Islak Saça: Havluyla nemi alınmış saça, özellikle uçlara yoğunlaşarak uygulayınız.  Avuç içine biraz ürün (saç uzunluğuna göre 1–2 pompa) alın.Kuru Saça: Gün içinde parlaklık vermek ve yatıştırmak için uygulayınız. Durulama gerektirmez. İhtiyaca göre günlük veya her yıkama sonrası kullanılabilir.',
    ],
    ingredients: 'Hydrogenated Polyisobutene, C13-14 Isoparaffin, Dimethiconol, Isopropyl Myristate, Isododecane, Polysilicone-13, Parfum, Squalane, Phytosteryl/Octyldodecyl Lauroyl Glutamate , Lactic Acid, Hydrolyzed Conchiolin Protein, Dimethicone, Tocopherol, Water (Aqua), Amodimethicone, Ppg-2-Deceth-12, Butylene Glycol, Glycerin, Phenoxyethanol. ',
    warning: 'Haricen kullanılır. Gözle temasından kaçınınız; temas halinde bol su ile yıkayınız. Yanıcı bileşenler içerdiğinden ateşten, kıvılcımdan ve aşırı sıcaktan uzak tutunuz. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz. ',
    trendyolUrl: STORE_URL,
    imageUrl: '/fin2.jpeg',
    imageAlt: 'Fino Premium Hair Oil',
    accentColor: '#7A8C7A',
    tag: 'Çok Satan',
  },
  {
    id: 'fino-3',
    brand: 'FINO',
    name: 'Fino Premium Touch Shampoo 550ml',
    subtitle: 'FINO PREMIUM TOUCH ŞAMPUAN',
    concern: 'Nem & Pürüzsüzlük',
    description: 'Aşırı işlem görmüş, kurumuş ve yıpranmış saçlar için özel olarak geliştirilmiştir. Zenginleştirilmiş formülü ile saç tellerini kökten uca sarmalayarak derinlemesine temizlerken aynı zamanda bakım yapar. Saçın kaybettiği nemi geri kazanmasına yardımcı olur, saç yüzeyindeki pürüzleri gidererek ipeksi bir yumuşaklık ve parlaklık kazandırmayı hedefler. Saçın daha kolay taranmasını sağlar ve güçlenmesine destek olur.',
    barcode: '4550516475961',
    usage: [
      'Saçlarınızı ılık su ile tamamen ıslatınız. Pompa başlığını kullanarak avucunuza aldığınız yeterli miktarda şampuanı, saç derinize ve saç boylarına nazikçe masaj yaparak köpürtünüz. Etkili bir temizlik ve bakım için parmak uçlarınızla masaj yaptıktan sonra bol su ile durulayınız. İhtiyaç duyulması halinde işlemi tekrarlayınız. En iyi sonuç için serinin saç kremi ve maskesi ile birlikte kullanılması önerilir.',
    ],
    ingredients: 'Water (Aqua), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Methyl Cocoyl Taurate, Taurine, Glycol Distearate, Sorbitol, Guar Hydroxypropyltrimonium Chloride, Squalane, Propyltrimoniumchloride Acrylamide/Dimethylacrylamide Copolymer, Polyquaternium-10, Pca, Royal Jelly Extract, Sodium Sulfate, Peg-2 Laurate, Dipropylene Glycol, Dimethiconol, Salicylic Acid, Disodium Edta, Citric Acid, Butylene Glycol, Sodium Lauryl Sulfate, Phenoxyethanol, Sodium Benzoate, Parfum.',
    warning: ' Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/fin3.jpeg',
    imageAlt: 'Fino Premium Conditioner',
    accentColor: '#7A8C7A',
  },
  {
    id: 'fino-4',
    brand: 'FINO',
    name: 'Fino Premium Touch Conditioner',
    subtitle: 'FINO PREMIUM TOUCH SAÇ BAKIM KREMİ',
    concern: 'Günlük Bakım & Koruma',
    description: 'Yıpranmış, kuru ve işlem görmüş saçlar için formüle edilen bu yoğun bakım kremi, saç yüzeyini pürüzsüzleştirerek ipeksi bir dokunuş kazandırmayı hedefler. İçeriğindeki nemlendirici ajanlar sayesinde saç tellerini sarmalar, karışıklıkları açar ve kolay taranma sağlar. Saçın kaybettiği nemi geri kazandırmaya, elektriklenmeyi önlemeye ve saç uçlarındaki kırılmaları onarmaya yardımcı olur. Durulama sonrasında saçta ağırlık yapmadan parlak bir görünüm bırakır.',
    barcode: '4550516476074',
    usage: ['Şampuanlama işleminden sonra saçın suyunu hafifçe sıkınız. Pompa yardımıyla yeterli miktarda ürünü avucunuza alınız. Saç diplerine değdirmeden, özellikle saçın boy ve uç kısımlarına masaj yaparak iyice yediriniz. Ürünün etkisini göstermesi için 1-2 dakika bekledikten sonra bol su ile durulayınız. Günlük kullanıma uygundur.'],
    ingredients: ' Water (Aqua), Sorbitol, Dimethicone, Hydrogenated Rapeseed Alcohol, Isopentyldiol, Behentrimonium Chloride, Amodimethicone, Hydroxypropyl Arginine Lauryl/Myristyl Ether Hcl, Dihydroxyethyl Stearyl Propyl Dimonium, Glutamic Acid, Trehalose, Squalane, Steartrimonium Chloride, Peg-90M, Pca, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Hydrolyzed Wheat Protein, Polyquaternium-64, Hydrolyzed Wheat Starch, Royal Jelly Extract, Isopropyl Alcohol, Cetyl Alcohol, Octyldodecanol, Alcohol, Propylene Glycol, Butylene Glycol, Tocopherol, Phenoxyethanol, Sodium Benzoate, Parfum.',
    warning: ' Haricen kullanılır. Gözle temasından kaçınınız; temas halinde derhal bol su ile yıkayınız. Çocukların erişemeyeceği yerlerde, direkt güneş ışığından uzak ve oda sıcaklığında saklayınız. Beklenmeyen bir etki görüldüğünde doktorunuza başvurunuz.',
    trendyolUrl: STORE_URL,
    imageUrl: '/fin4.jpeg',
    imageAlt: 'Fino Premium Shampoo',
    accentColor: '#7A8C7A',
  },
];

// Temizlenmiş ve Sadece İstediğin Son 2 Slayt Bırakılmış Banner Listesi
export const carouselSlides = [
  {
    id: 1,
    headline: '',
    subheadline: '',
    description: '',
    cta: '',
    imageUrl: '/car1.jpg',
    imageAlt: 'Premium Saç Bakım Koleksiyonu',
    accent: '#B8935A',
  },
  {
    id: 2,
    headline: '',
    subheadline: '',
    description: '',
    cta: '',
    imageUrl: '/car2.jpg',
    imageAlt: 'Japon Güzellik Koleksiyonu',
    accent: '#B8935A',
  },
];
