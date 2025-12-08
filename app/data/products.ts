export type Category = "for-her" | "for-him" | "unisex";

export type Product = {
  id: string;
  name: string;
  inspiredBy: string;
  price: number;
  category: Category;
  initial: string;
  image?: string | null; // optional path to /public/images/<id>.jpg
};

export const products: Product[] = [
  // FOR HER
  {
    id: "bella",
    name: "Bella",
    inspiredBy: "Baccarat Rouge 540",
    price: 65,
    category: "for-her",
    initial: "B",
    image: "/images/bella.jpg",
  },
  {
    id: "rosh-bloom",
    name: "Rosh Bloom",
    inspiredBy: "Delina – Parfums de Marly",
    price: 60,
    category: "for-her",
    initial: "R",
    image: "/images/rosh-bloom.jpg",
  },
  {
    id: "dubai-nights",
    name: "Dubai Nights",
    inspiredBy: "Oud Satin Mood",
    price: 70,
    category: "for-her",
    initial: "D",
    image: "/images/dubai-nights.jpg",
  },
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    inspiredBy: "Carolina Herrera Good Girl",
    price: 55,
    category: "for-her",
    initial: "V",
    image: "/images/velvet-rose.jpg",
  },
  {
    id: "boss-lady",
    name: "Boss Lady",
    inspiredBy: "Chanel Coco Mademoiselle",
    price: 58,
    category: "for-her",
    initial: "B",
    image: "/images/boss-lady.jpg",
  },
  {
    id: "goddess",
    name: "Goddess",
    inspiredBy: "YSL Libre Intense",
    price: 60,
    category: "for-her",
    initial: "G",
    image: "/images/goddess.jpg",
  },
  {
    id: "golden-aura",
    name: "Golden Aura",
    inspiredBy: "Dior J’adore",
    price: 55,
    category: "for-her",
    initial: "G",
    image: "/images/golden-aura.jpg",
  },
  {
    id: "royal-femme",
    name: "Royal Femme",
    inspiredBy: "Valentino Born in Roma",
    price: 58,
    category: "for-her",
    initial: "R",
    image: "/images/royal-femme.jpg",
  },

  // FOR HIM
  {
    id: "alpha-king",
    name: "Alpha King",
    inspiredBy: "Dior Sauvage",
    price: 60,
    category: "for-him",
    initial: "A",
    image: "/images/alpha-king.jpg",
  },
  {
    id: "iconic-man",
    name: "Iconic Man",
    inspiredBy: "Bleu de Chanel",
    price: 62,
    category: "for-him",
    initial: "I",
    image: "/images/iconic-man.jpg",
  },
  {
    id: "executive",
    name: "Executive",
    inspiredBy: "Creed Aventus",
    price: 75,
    category: "for-him",
    initial: "E",
    image: "/images/executive.jpg",
  },
  {
    id: "dark-leather",
    name: "Dark Leather",
    inspiredBy: "Tom Ford Oud Wood",
    price: 68,
    category: "for-him",
    initial: "D",
    image: "/images/dark-leather.jpg",
  },

  // UNISEX
  {
    id: "desert-gold",
    name: "Desert Gold",
    inspiredBy: "Ombre Nomade",
    price: 64,
    category: "unisex",
    initial: "D",
    image: "/images/desert-gold.jpg",
  },
  {
    id: "amber-noir",
    name: "Amber Noir",
    inspiredBy: "Maison Margiela Jazz Club",
    price: 59,
    category: "unisex",
    initial: "A",
    image: "/images/amber-noir.jpg",
  },
  {
    id: "pure-musk",
    name: "Pure Musk",
    inspiredBy: "Narciso Musk Noir",
    price: 52,
    category: "unisex",
    initial: "P",
    image: "/images/pure-musk.jpg",
  },
];
