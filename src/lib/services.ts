// src/lib/services.ts
import type { IconName } from "./icons";

export interface Service {
  slug: string;
  icon: IconName;
  name: { fr: string; ar: string; en: string };
  desc: { fr: string; ar: string; en: string };
}

export const SERVICES: Service[] = [
  {
    slug: "plomberie",
    icon: "plumbing",
    name: { fr: "Plomberie", ar: "السباكة", en: "Plumbing" },
    desc: {
      fr: "Installation, réparation et dépannage sanitaire.",
      ar: "تركيب، إصلاح وصيانة السباكة.",
      en: "Installation, repair and plumbing troubleshooting.",
    },
  },
  {
    slug: "electricite",
    icon: "electric",
    name: { fr: "Électricité", ar: "الكهرباء", en: "Electricity" },
    desc: {
      fr: "Installations électriques, dépannage et mise aux normes.",
      ar: "تركيبات كهربائية، إصلاح وتحديث.",
      en: "Electrical installations, repairs and upgrades.",
    },
  },
  {
    slug: "climatisation",
    icon: "ac",
    name: { fr: "Climatisation", ar: "التكييف", en: "Air conditioning" },
    desc: {
      fr: "Installation, entretien et réparation de climatiseurs.",
      ar: "تركيب، صيانة وإصلاح المكيفات.",
      en: "AC installation, maintenance and repair.",
    },
  },
  {
    slug: "carrelage",
    icon: "tile",
    name: { fr: "Carrelage", ar: "البلاط", en: "Tiling" },
    desc: {
      fr: "Pose de carrelage sol et mur, finitions soignées.",
      ar: "تركيب البلاط للأرضيات والجدران.",
      en: "Floor and wall tiling with fine finishes.",
    },
  },
  {
    slug: "peinture",
    icon: "paint",
    name: { fr: "Peinture", ar: "الدهان", en: "Painting" },
    desc: {
      fr: "Peinture intérieure et extérieure, finitions premium.",
      ar: "دهان داخلي وخارجي، تشطيبات راقية.",
      en: "Interior and exterior painting, premium finishes.",
    },
  },
  {
    slug: "platre",
    icon: "plaster",
    name: { fr: "Plâtre / Gypsum", ar: "الجبس", en: "Plaster / Gypsum" },
    desc: {
      fr: "Faux plafonds, cloisons et décorations en plâtre.",
      ar: "أسقف مستعارة، جدران فاصلة وديكورات جبسية.",
      en: "False ceilings, partitions and plaster decorations.",
    },
  },
  {
    slug: "menuiserie",
    icon: "carpentry",
    name: { fr: "Menuiserie", ar: "النجارة", en: "Carpentry" },
    desc: {
      fr: "Portes, placards, meubles sur mesure en bois.",
      ar: "أبواب، خزائن وأثاث خشبي مخصص.",
      en: "Doors, wardrobes and custom wooden furniture.",
    },
  },
  {
    slug: "serrurerie",
    icon: "lock",
    name: { fr: "Serrurerie", ar: "الإقفال", en: "Locksmith" },
    desc: {
      fr: "Ouverture, changement de serrures et sécurité.",
      ar: "فتح، تغيير الأقفال وأنظمة الأمان.",
      en: "Opening, lock changes and security.",
    },
  },
  {
    slug: "nettoyage",
    icon: "cleaning",
    name: { fr: "Nettoyage", ar: "التنظيف", en: "Cleaning" },
    desc: {
      fr: "Nettoyage professionnel de maisons et bureaux.",
      ar: "تنظيف احترافي للمنازل والمكاتب.",
      en: "Professional home and office cleaning.",
    },
  },
  {
    slug: "renovation",
    icon: "renovation",
    name: { fr: "Rénovation", ar: "التجديد", en: "Renovation" },
    desc: {
      fr: "Rénovation complète, petits et grands travaux.",
      ar: "تجديد شامل، أشغال صغيرة وكبيرة.",
      en: "Full renovation, small and big works.",
    },
  },
];