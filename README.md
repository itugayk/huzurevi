# Şefkat Yaşam Evi — Huzurevi & Yaşlı Bakım Merkezi (Demo)

Sıcak, güven veren ve şeffaf bir **özel huzurevi / yaşlı bakım merkezi** tanıtım sitesi.
Premium portföy gösterimi için **Astro + Tailwind CSS v4 + GSAP** ile geliştirilmiştir.

> Demo: [huzurevi.demo.dijifa.com](https://huzurevi.demo.dijifa.com)

## ✨ Öne çıkanlar

- **Erişilebilirlik önceliği:** yüksek kontrast modu, yazı boyutu artır/azalt, büyük tıklama alanları (≥44px), `prefers-reduced-motion` desteği, klavye ile gezinilebilir lightbox & menü.
- **Yumuşak, sakin animasyonlar:** GSAP + ScrollTrigger ile zarif reveal'lar (agresif değil).
- **7 sayfa:** Ana Sayfa, Hizmetlerimiz, Tesisimiz (galeri + sanal tur mock'u), Bakım Anlayışımız, Ekip, SSS, İletişim/Randevu.
- **Ziyaret randevu formu**, akordeon SSS, oda tipleri, güven rozetleri (ruhsat, sağlık standartları).
- **SEO:** `MedicalOrganization` / `LocalBusiness` ve `FAQPage` JSON-LD, Open Graph, sitemap, semantik işaretleme.
- **Tamamen statik & kendi kendine yeten:** Tüm görseller ve fontlar pakete dahildir (çalışma anında dış CDN yok).

## 🎨 Tasarım dili

| Öğe | Değer |
| --- | --- |
| Yumuşak mavi | `#6f9bc4` |
| Şeftali aksan | `#e8b89b` |
| Yeşil dokunuş | `#8aab8d` |
| Krem yüzey | `#fdfaf4` |
| Tipografi | Nunito (başlık) + Mulish (metin), büyük punto |

## 🚀 Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/ (statik çıktı)
npm run preview
```

## 🐳 Docker ile çalıştırma

Çok aşamalı build (Node ile derleme → Nginx ile yayın):

```bash
docker build -t sefkat-yasam-evi .
docker run -p 8080:80 sefkat-yasam-evi
# http://localhost:8080
```

## 📦 Deploy

Coolify üzerinde, bu GitHub deposundan **Dockerfile** build pack'i ile dağıtılır.
Domain: `huzurevi.demo.dijifa.com` · Port: `80`.

## 🗂️ Yapı

```
src/
  components/   # Header, Footer, Icon, kartlar, galeri/lightbox, form, vb.
  data/site.ts  # Tüm içerik (hizmetler, ekip, SSS, oda tipleri, yorumlar)
  layouts/      # BaseLayout (SEO + JSON-LD + a11y + GSAP)
  pages/        # 7 sayfa + 404
public/images/  # Curate edilmiş gerçek mekan/insan fotoğrafları
Dockerfile · nginx.conf
```

---
Bu bir **demo** projedir; içerik ve marka temsilîdir.
