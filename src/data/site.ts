// Merkezi içerik & site verileri — Şefkat Yaşam Evi

export const site = {
  name: "Şefkat Yaşam Evi",
  shortName: "Şefkat",
  slogan: "Sevgiyle bakılan, onurla yaşanan bir yuva",
  description:
    "Şefkat Yaşam Evi; sağlık destekli konaklama, 7/24 profesyonel bakım ve sıcak bir yuva ortamı sunan özel huzurevi ve yaşlı bakım merkezidir.",
  url: "https://huzurevi.demo.dijifa.com",
  phone: "+90 212 555 01 00",
  phoneHref: "+902125550100",
  emergency: "+90 549 555 01 12",
  emergencyHref: "+905495550112",
  email: "iletisim@sefkatyasamevi.com",
  address: "Bahçe Mah. Huzur Caddesi No: 24, Başakşehir / İstanbul",
  mapsQuery: "Başakşehir İstanbul",
  license: "T.C. Aile ve Sosyal Hizmetler Bakanlığı Ruhsatlı · Ruhsat No: HZ-2014/0482",
  founded: 2014,
  visitingHours: "Her gün 10:00 – 19:00 (randevulu)",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Tesisimiz", href: "/tesisimiz" },
  { label: "Bakım Anlayışımız", href: "/bakim-anlayisimiz" },
  { label: "Ekip", href: "/ekip" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export const stats = [
  { value: "10+", label: "Yıllık tecrübe" },
  { value: "7/24", label: "Kesintisiz bakım & hemşire" },
  { value: "1:4", label: "Personel / sakin oranı" },
  { value: "%98", label: "Aile memnuniyeti" },
];

export type Service = {
  icon: string;
  title: string;
  summary: string;
  details: string[];
  accent: "brand" | "peach" | "sage";
};

export const services: Service[] = [
  {
    icon: "clock",
    title: "7/24 Kesintisiz Bakım",
    summary:
      "Gece gündüz yanınızdayız. Nöbetçi hemşire ve bakım personelimiz her an ulaşılabilir.",
    details: [
      "Çağrı butonlu odalar ve anlık müdahale",
      "Gece nöbet sistemi ve düzenli oda kontrolleri",
      "Acil durumda ambulans ve hastane koordinasyonu",
    ],
    accent: "brand",
  },
  {
    icon: "heart-pulse",
    title: "Sağlık Takibi & Tıbbi Destek",
    summary:
      "Tansiyon, şeker, ilaç ve kronik hastalık takibi hekim gözetiminde yürütülür.",
    details: [
      "Günlük yaşamsal değer ölçümleri ve kayıt",
      "İlaç saatlerinin hemşire takibi",
      "Anlaşmalı hastanelerle sevk ve muayene desteği",
    ],
    accent: "sage",
  },
  {
    icon: "activity",
    title: "Fizyoterapi & Rehabilitasyon",
    summary:
      "Bireye özel egzersiz programlarıyla hareket kabiliyetini ve bağımsızlığı destekliyoruz.",
    details: [
      "Düşme önleme ve denge çalışmaları",
      "Ameliyat / felç sonrası rehabilitasyon",
      "Donanımlı fizyoterapi salonu",
    ],
    accent: "peach",
  },
  {
    icon: "leaf",
    title: "Beslenme & Diyetisyen Desteği",
    summary:
      "Diyetisyen onaylı, hastalığa uygun ve lezzetli menüler her gün taze hazırlanır.",
    details: [
      "Diyabet, tuzsuz, yumuşak gıda diyetleri",
      "Mevsimine uygun zengin menüler",
      "Kişisel tercihler ve alerji takibi",
    ],
    accent: "sage",
  },
  {
    icon: "users",
    title: "Sosyal Aktiviteler & Terapi",
    summary:
      "Müzik, sanat, oyun ve sohbet etkinlikleriyle hayata bağlı, mutlu bir günlük rutin.",
    details: [
      "Haftalık etkinlik takvimi",
      "Müzik, hafıza ve uğraşı terapisi",
      "Özel günler, doğum günü ve bahçe etkinlikleri",
    ],
    accent: "peach",
  },
  {
    icon: "brain",
    title: "Demans & Alzheimer Bakımı",
    summary:
      "Bilişsel gerileme yaşayan sakinlerimiz için güvenli, sakin ve yönlendirici özel bölüm.",
    details: [
      "Kaybolmayı önleyen güvenli yaşam alanı",
      "Hafıza destekleyici terapiler",
      "Sakinleştirici, tanıdık ortam tasarımı",
    ],
    accent: "brand",
  },
  {
    icon: "hand-heart",
    title: "Kişisel Bakım & Hijyen",
    summary:
      "Banyo, giyinme ve günlük kişisel ihtiyaçlarda nazik, mahremiyete saygılı destek.",
    details: [
      "Günlük kişisel bakım ve temizlik",
      "Cilt ve bası yarası önleme bakımı",
      "Saygı ve mahremiyet odaklı yaklaşım",
    ],
    accent: "brand",
  },
];

export type Room = {
  name: string;
  image: string;
  capacity: string;
  desc: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    name: "Tek Kişilik Suit Oda",
    image: "/images/oda-1.jpg",
    capacity: "1 kişilik",
    desc: "Mahremiyet ve konforun ön planda olduğu, kişisel eşyalarınızla ev sıcaklığında düzenlenebilen özel oda.",
    features: ["Özel banyo", "Çağrı sistemi", "Klima & TV", "Bahçe / şehir manzarası"],
  },
  {
    name: "Çift Kişilik Konforlu Oda",
    image: "/images/oda-2.jpg",
    capacity: "2 kişilik",
    desc: "Eşler veya arkadaşlık etmek isteyen sakinlerimiz için ferah, paylaşımlı ve sosyal oda seçeneği.",
    features: ["Geniş yaşam alanı", "Çağrı sistemi", "Ortak balkon", "Kişisel dolaplar"],
  },
  {
    name: "Özel Bakım Odası",
    image: "/images/oda-3.jpg",
    capacity: "Yüksek bağımlılık",
    desc: "Yatağa bağımlı veya yoğun bakım ihtiyacı olan sakinlerimiz için tıbbi donanımlı, hemşireye yakın oda.",
    features: ["Hasta karyolası", "Sürekli hemşire takibi", "Bası yarası önleme", "Tıbbi cihaz altyapısı"],
  },
];

export type GalleryItem = { src: string; alt: string; category: string };

export const gallery: GalleryItem[] = [
  { src: "/images/tesis-resepsiyon.jpg", alt: "Ferah ve aydınlık karşılama / resepsiyon alanı", category: "Ortak Alanlar" },
  { src: "/images/oda-1.jpg", alt: "Sıcak ve huzurlu tek kişilik suit oda", category: "Odalar" },
  { src: "/images/oda-2.jpg", alt: "Konforlu çift kişilik oda", category: "Odalar" },
  { src: "/images/salon.jpg", alt: "Sakinlerimizin bir araya geldiği sosyal yaşam salonu", category: "Sosyal Alanlar" },
  { src: "/images/sosyal-oyun.jpg", alt: "Bahçede satranç ve zekâ oyunları etkinliği", category: "Sosyal Alanlar" },
  { src: "/images/yemek.jpg", alt: "Birlikte keyifli yemek vakti", category: "Yemek" },
  { src: "/images/bahce-1.jpg", alt: "Yeşillikler içinde huzurlu bahçe ve sera", category: "Bahçe" },
  { src: "/images/bahce-2.jpg", alt: "Bahçede güvenli yürüyüş alanları", category: "Bahçe" },
  { src: "/images/fizyoterapi.jpg", alt: "Fizyoterapi ve rehabilitasyon çalışması", category: "Sağlık" },
  { src: "/images/mobilite.jpg", alt: "Bahçede destekli yürüyüş ve hareket", category: "Sağlık" },
];

export type Value = { icon: string; title: string; text: string };

export const values: Value[] = [
  {
    icon: "eye",
    title: "Şeffaflık & Aile İletişimi",
    text: "Sevdiklerinizin durumu hakkında düzenli bilgilendirme, açık ziyaret politikası ve istediğiniz an ulaşabileceğiniz bir ekip.",
  },
  {
    icon: "shield-check",
    title: "Güvenlik Önceliği",
    text: "7/24 kameralı izleme, çağrı butonları, kaymaz zeminler, yangın sistemi ve yetkili giriş-çıkış kontrolü.",
  },
  {
    icon: "sparkles",
    title: "Hijyen & Enfeksiyon Kontrolü",
    text: "Günlük dezenfeksiyon, çamaşır ve yemek hijyeni standartları, enfeksiyon kontrol protokolleri.",
  },
  {
    icon: "clipboard",
    title: "Bireye Özel Bakım Planı",
    text: "Her sakinimiz için hekim, hemşire ve diyetisyen onaylı; düzenli güncellenen kişisel bakım planı.",
  },
  {
    icon: "hand-heart",
    title: "Saygı & Mahremiyet",
    text: "Onuru, mahremiyeti ve tercihlerini koruyan; her bireyi bir aile büyüğü gibi gören bir yaklaşım.",
  },
  {
    icon: "home",
    title: "Sıcak Bir Yuva",
    text: "Hastane değil, ev. Sıcak renkler, ferah ışık, tanıdık eşyalar ve gerçek bir aile ortamı.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Elif Demir",
    role: "Mesul Müdür & Geriatri Uzmanı",
    image: "/images/ekip-doktor1.jpg",
    bio: "Yaşlı sağlığı alanında 15 yıllık deneyimiyle bakım planlarının tıbbi sorumluluğunu üstlenir.",
  },
  {
    name: "Dr. Mehmet Aydın",
    role: "İç Hastalıkları Uzmanı",
    image: "/images/ekip-doktor2.jpg",
    bio: "Kronik hastalık takibi ve genel sağlık değerlendirmelerini düzenli vizitlerle yürütür.",
  },
  {
    name: "Hem. Zeynep Kaya",
    role: "Sorumlu Hemşire",
    image: "/images/ekip-hemsire.jpg",
    bio: "Hemşirelik hizmetlerini koordine eder; ilaç ve yaşamsal değer takibinin güvenliğinden sorumludur.",
  },
  {
    name: "Hem. Caner Yıldız",
    role: "Hemşirelik Hizmetleri Sorumlusu",
    image: "/images/ekip-bashemsire.jpg",
    bio: "Gece-gündüz nöbet düzenini ve bakım personeli ekibinin eğitimini yönetir.",
  },
  {
    name: "Fzt. Burak Şahin",
    role: "Fizyoterapist",
    image: "/images/ekip-fizyoterapist.jpg",
    bio: "Bireysel rehabilitasyon ve denge programlarıyla sakinlerimizin hareket bağımsızlığını destekler.",
  },
  {
    name: "Uzm. Selin Arslan",
    role: "Sosyal Hizmet & Aktivite Koordinatörü",
    image: "/images/ekip-sosyal.jpg",
    bio: "Sosyal uyumu, aile iletişimini ve haftalık etkinlik takvimini planlar.",
  },
  {
    name: "Dyt. Merve Çelik",
    role: "Diyetisyen",
    image: "/images/ekip-diyetisyen.jpg",
    bio: "Hastalığa ve damak tadına uygun, dengeli beslenme menülerini hazırlar ve takip eder.",
  },
];

export type Testimonial = {
  name: string;
  relation: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ayşe K.",
    relation: "Annesi için · İstanbul",
    text: "Annemi emanet ederken çok endişeliydim. Şimdi her ziyaretimde gülümsediğini görüyorum. Ekip her sorumuza sabırla, şeffafça cevap veriyor.",
    rating: 5,
  },
  {
    name: "Murat T.",
    relation: "Babası için · Kocaeli",
    text: "Babamın şeker ve tansiyon takibi düzene girdi. Hemşireler ilaç saatlerini hiç aksatmıyor, durum değişince hemen bizi arıyorlar.",
    rating: 5,
  },
  {
    name: "Selin Y.",
    relation: "Babaannesi için · İstanbul",
    text: "Alzheimer bölümündeki sakinlik ve sıcaklık beni çok rahatlattı. Babaannem burada kendini güvende ve evinde hissediyor.",
    rating: 5,
  },
  {
    name: "Emre D.",
    relation: "Annesi için · Tekirdağ",
    text: "Fizyoterapi sayesinde annem yeniden bastonla yürümeye başladı. Bahçedeki etkinlikler onu yıllar sonra ilk kez bu kadar mutlu etti.",
    rating: 5,
  },
];

export const trustBadges = [
  { icon: "badge", label: "Bakanlık Ruhsatlı", sub: "HZ-2014/0482" },
  { icon: "shield-check", label: "7/24 Güvenlik", sub: "Kamera & çağrı sistemi" },
  { icon: "heart-pulse", label: "Hekim Gözetimi", sub: "Düzenli sağlık takibi" },
  { icon: "sparkles", label: "Hijyen Standardı", sub: "Enfeksiyon kontrolü" },
];

export type Faq = { q: string; a: string };
export type FaqGroup = { category: string; icon: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    category: "Ücretlendirme",
    icon: "wallet",
    items: [
      {
        q: "Aylık ücretler nasıl belirleniyor?",
        a: "Ücret; seçilen oda tipi (tek/çift/özel bakım) ve sakinimizin bakım ihtiyaç düzeyine göre belirlenir. Konaklama, yemek, hemşirelik, sosyal aktiviteler ve rutin sağlık takibi ücrete dahildir. Net fiyat teklifini, ücretsiz ön değerlendirme sonrası şeffaf bir şekilde paylaşıyoruz.",
      },
      {
        q: "Ücrete neler dahil değildir?",
        a: "Reçeteli ilaçlar, hastane sevki, kişisel doktor talepleri ve özel tıbbi malzemeler ücrete dahil değildir. Tüm ek masraflar öncesinde aile ile paylaşılır; sürpriz maliyet oluşturmuyoruz.",
      },
      {
        q: "Kısa süreli / geçici konaklama mümkün mü?",
        a: "Evet. Ameliyat sonrası iyileşme, bakıcının izinli olduğu dönemler veya deneme amaçlı kısa süreli (haftalık/aylık) konaklama seçeneklerimiz mevcuttur.",
      },
    ],
  },
  {
    category: "Ziyaret",
    icon: "calendar",
    items: [
      {
        q: "Sevdiğimi ne sıklıkla ziyaret edebilirim?",
        a: "Açık ziyaret politikamız vardır. Her gün 10:00–19:00 saatleri arasında randevuyla ziyaret edebilir, özel günlerde daha esnek saatler için ekibimizle görüşebilirsiniz.",
      },
      {
        q: "Ziyaret için randevu şart mı?",
        a: "Sakinlerimizin günlük rutinini ve dinlenme saatlerini korumak için kısa bir randevu öneriyoruz. Telefon veya web üzerinden birkaç dakikada randevu oluşturabilirsiniz.",
      },
      {
        q: "Uzaktan görüntülü görüşme yapabilir miyiz?",
        a: "Elbette. Yurt dışında veya uzakta olan aileler için personel eşliğinde düzenli görüntülü görüşme imkânı sağlıyoruz.",
      },
    ],
  },
  {
    category: "Sağlık Süreçleri",
    icon: "heart-pulse",
    items: [
      {
        q: "Acil bir sağlık durumunda ne oluyor?",
        a: "7/24 nöbetçi hemşiremiz ilk müdahaleyi yapar, gerekirse anlaşmalı hastaneye ambulansla sevk eder ve aileyi anında bilgilendiririz. Tüm süreç kayıt altına alınır.",
      },
      {
        q: "İlaçlar nasıl takip ediliyor?",
        a: "Her sakinimizin ilaç çizelgesi hemşire kontrolündedir. İlaçlar doğru doz ve saatte verilir, kayıt edilir; değişiklikler hekim onayıyla yapılır.",
      },
      {
        q: "Demans / Alzheimer hastaları kabul ediliyor mu?",
        a: "Evet. Bilişsel gerileme yaşayan sakinlerimiz için güvenli, kaybolmayı önleyen ve sakinleştirici özel bir bölümümüz ile hafıza destekleyici terapilerimiz bulunmaktadır.",
      },
    ],
  },
  {
    category: "Kabul & Yerleşim",
    icon: "clipboard",
    items: [
      {
        q: "Kabul süreci nasıl işliyor?",
        a: "Önce ücretsiz bir tesis ziyareti ve tanışma yaparız. Ardından hekimimiz sağlık değerlendirmesini tamamlar, bireysel bakım planı hazırlanır ve uygun oda belirlenerek yerleşim planlanır.",
      },
      {
        q: "Hangi belgeler gerekiyor?",
        a: "Kimlik fotokopisi, varsa epikriz / sağlık raporları ve kullanılan ilaç listesi yeterlidir. Eksik belgelerde ekibimiz size yol gösterir.",
      },
      {
        q: "Sakinimiz kişisel eşyalarını getirebilir mi?",
        a: "Kesinlikle öneriyoruz. Tanıdık eşyalar, fotoğraflar ve sevilen objeler uyum sürecini kolaylaştırır ve odayı gerçek bir yuvaya dönüştürür.",
      },
    ],
  },
];
