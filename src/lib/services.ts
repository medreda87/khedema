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
  }





];