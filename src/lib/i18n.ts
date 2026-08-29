// src/lib/i18n.ts
export type Lang = "ar" | "fr" | "en";

export const DIRS: Record<Lang, "rtl" | "ltr"> = {
  ar: "rtl",
  fr: "ltr",
  en: "ltr",
};

export const LANG_LABELS: Record<Lang, string> = {
  ar: "العربية",
  fr: "Français",
  en: "English",
};

type Dict = Record<string, string>;

const FR: Dict = {
  "nav.services": "Services",
  "nav.how": "Comment ça marche",
  "nav.technicians": "Techniciens",
  "nav.about": "À propos",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "cta.request": "Demander un service",
  "cta.seeServices": "Voir nos services",
  "cta.seeAll": "Voir tous les services",
  "cta.call": "Appeler maintenant",
  "cta.whatsapp": "Demander via WhatsApp",
  "cta.send": "Envoyer ma demande",
  "cta.viewProfile": "Voir le profil",
  "hero.title": "Trouvez le bon technicien pour chaque besoin",
  "hero.subtitle":
    "Plomberie, électricité, climatisation, carrelage, peinture, menuiserie et bien plus. Décrivez votre besoin et contactez-nous simplement.",
  "services.title": "Nos services",
  "services.subtitle":
    "Des professionnels pour vos travaux, réparations et installations.",
  "tech.verified": "Vérifié",
  "tech.years": "ans d'expérience",
  "form.name": "Nom complet",
  "form.phone": "Téléphone",
  "form.service": "Service souhaité",
  "form.city": "Ville",
  "form.description": "Description du besoin",
  "form.date": "Date souhaitée",
  "form.selectService": "Choisir un service",
  "faq.title": "Questions fréquentes",
  "faq.subtitle": "Tout ce que vous devez savoir avant de nous contacter.",
  "footer.tagline":
    "Une solution simple pour trouver le bon professionnel.",
  "footer.services": "Services",
  "footer.platform": "Plateforme",
  "footer.contact": "Contact",
  "footer.rights": "Tous droits réservés",
  "footer.privacy": "Confidentialité",
  "footer.terms": "Conditions",
  "whatsapp.prefix": "Bonjour, je souhaite demander un service de",
  "mobile.call": "Appeler",
  "mobile.request": "Demander",
};

const AR: Dict = {
  "nav.services": "الخدمات",
  "nav.how": "كيف نعمل",
  "nav.technicians": "التقنيون",
  "nav.about": "من نحن",
  "nav.faq": "أسئلة شائعة",
  "nav.contact": "اتصل بنا",
  "cta.request": "طلب خدمة",
  "cta.seeServices": "اكتشف خدماتنا",
  "cta.seeAll": "عرض جميع الخدمات",
  "cta.call": "اتصل الآن",
  "cta.whatsapp": "اطلب عبر واتساب",
  "cta.send": "إرسال طلبي",
  "cta.viewProfile": "عرض الملف",
  "hero.title": "اعثر على التقني المناسب لكل خدمة تحتاجها",
  "hero.subtitle":
    "السباكة، الكهرباء، التكييف، البلاط، الدهان، النجارة والمزيد. صف احتياجك وتواصل معنا بسهولة.",
  "services.title": "خدماتنا",
  "services.subtitle": "محترفون لأشغالك، إصلاحاتك وتركيباتك.",
  "tech.verified": "موثق",
  "tech.years": "سنوات خبرة",
  "form.name": "الاسم الكامل",
  "form.phone": "الهاتف",
  "form.service": "الخدمة المطلوبة",
  "form.city": "المدينة",
  "form.description": "وصف الاحتياج",
  "form.date": "التاريخ المطلوب",
  "form.selectService": "اختر خدمة",
  "faq.title": "أسئلة شائعة",
  "faq.subtitle": "كل ما تحتاج معرفته قبل التواصل معنا.",
  "footer.tagline": "حل بسيط للعثور على المحترف المناسب.",
  "footer.services": "الخدمات",
  "footer.platform": "المنصة",
  "footer.contact": "اتصل",
  "footer.rights": "جميع الحقوق محفوظة",
  "footer.privacy": "الخصوصية",
  "footer.terms": "الشروط",
  "whatsapp.prefix": "مرحبا، أود طلب خدمة",
  "mobile.call": "اتصال",
  "mobile.request": "طلب",
};

const EN: Dict = {
  "nav.services": "Services",
  "nav.how": "How it works",
  "nav.technicians": "Technicians",
  "nav.about": "About",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "cta.request": "Request a service",
  "cta.seeServices": "See our services",
  "cta.seeAll": "See all services",
  "cta.call": "Call now",
  "cta.whatsapp": "Request via WhatsApp",
  "cta.send": "Send my request",
  "cta.viewProfile": "View profile",
  "hero.title": "Find the right technician for every job",
  "hero.subtitle":
    "Plumbing, electricity, AC, tiling, painting, carpentry and more. Describe your need and contact us easily.",
  "services.title": "Our services",
  "services.subtitle":
    "Professionals for your works, repairs and installations.",
  "tech.verified": "Verified",
  "tech.years": "years of experience",
  "form.name": "Full name",
  "form.phone": "Phone",
  "form.service": "Desired service",
  "form.city": "City",
  "form.description": "Describe your need",
  "form.date": "Desired date",
  "form.selectService": "Choose a service",
  "faq.title": "Frequently asked questions",
  "faq.subtitle": "Everything you need to know before contacting us.",
  "footer.tagline": "A simple way to find the right professional.",
  "footer.services": "Services",
  "footer.platform": "Platform",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "whatsapp.prefix": "Hello, I would like to request a service for",
  "mobile.call": "Call",
  "mobile.request": "Request",
};

const DICTS: Record<Lang, Dict> = { fr: FR, ar: AR, en: EN };

export function t(lang: Lang, key: string): string {
  return DICTS[lang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "ar" || lang === "en") return lang;
  return "fr";
}