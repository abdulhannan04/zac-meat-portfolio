export type Product = {
  name: string;
  image: string;
  width: number;
  height: number;
};

export type ProductGroup = {
  id: string;
  title: string;
  eyebrow: string;
  products: Product[];
};

export const aboutParagraphs = [
  'ZAC Meat & Food is a leading manufacturer and exporter of premium-quality Halal meat, dedicated to providing fresh and frozen meat products that meet the highest hygiene, safety, and religious compliance standards. Our state-of-the-art facilities and rigorous quality control ensure that every product adheres to Islamic laws and international food safety regulations.',
  'With strong connections to farmers, we have the capability to source and process large volumes of livestock, ensuring a consistent and reliable supply for our customers. We specialize in beef, mutton, lamb, goat, and poultry, offering a wide range of cuts tailored to market demands.',
] as const;

export const mission =
  'To be the first choice in the global meat industry by delivering high-quality, Halal-certified meat while maintaining the highest standards of hygiene and food safety. We strive to create long-term partnerships with businesses worldwide by ensuring transparency, ethical sourcing, and excellence in service.';

export const vision =
  'To expand globally as a trusted Halal meat supplier, serving Middle Eastern, Asian, and African markets, while continuing to innovate and enhance our meat processing, packaging, and distribution systems.';

export const promisePoints = [
  'Extremely Talented Experts',
  'Strong Financial Position',
  'Modern Technology',
  'Strict Ethical Guidelines',
] as const;

export const trustStatement =
  'ZAC Meat & Food has earned the trust of customers not only across Pakistan but also around the globe. By consistently delivering premium-quality meats that meet the highest hygiene and nutritional standards, we have become a reliable choice for households, businesses, and distributors worldwide.';

export const certifications = [
  { image: '/assets/certifications/certification-01.png', width: 99, height: 98 },
  { image: '/assets/certifications/certification-02.png', width: 88, height: 98 },
  { image: '/assets/certifications/certification-03.png', width: 101, height: 96 },
  { image: '/assets/certifications/certification-04.png', width: 100, height: 91 },
  { image: '/assets/certifications/certification-05.png', width: 114, height: 92 },
  { image: '/assets/certifications/certification-06.png', width: 89, height: 98 },
  { image: '/assets/certifications/certification-07.png', width: 100, height: 98 },
  { image: '/assets/certifications/certification-08.png', width: 79, height: 98 },
] as const;

export const productGroups: ProductGroup[] = [
  {
    id: 'beef-products',
    title: 'Beef Products',
    eyebrow: 'Beef',
    products: [
      {
        name: 'Half-Cut Carcass',
        image: '/assets/images/products/beef-half-cut-carcass.webp',
        width: 541,
        height: 1115,
      },
      {
        name: 'Hind Quarter',
        image: '/assets/images/products/beef-hind-quarter.webp',
        width: 353,
        height: 872,
      },
      {
        name: 'Front Quarter',
        image: '/assets/images/products/beef-front-quarter.webp',
        width: 504,
        height: 671,
      },
    ],
  },
  {
    id: 'camel-goat-lamb',
    title: 'Camel, Goat & Lamb',
    eyebrow: 'Carcasses',
    products: [
      {
        name: 'Goat Carcass',
        image: '/assets/images/products/goat-carcass.webp',
        width: 364,
        height: 165,
      },
      {
        name: 'Lamb Carcass',
        image: '/assets/images/products/lamb-carcass.webp',
        width: 452,
        height: 452,
      },
      {
        name: 'Camel Carcass',
        image: '/assets/images/products/camel-carcass.webp',
        width: 1384,
        height: 568,
      },
    ],
  },
  {
    id: 'veal-products',
    title: 'Veal Products',
    eyebrow: 'Veal',
    products: [
      {
        name: 'Veal Leg',
        image: '/assets/images/products/veal-leg.webp',
        width: 373,
        height: 248,
      },
      {
        name: 'Bobby Veal',
        image: '/assets/images/products/bobby-veal.webp',
        width: 375,
        height: 305,
      },
      {
        name: 'Veal Tenderloin',
        image: '/assets/images/products/veal-tenderloin.webp',
        width: 232,
        height: 217,
      },
      {
        name: 'Veal Cube',
        image: '/assets/images/products/veal-cube.webp',
        width: 425,
        height: 237,
      },
      {
        name: 'Veal Trimming',
        image: '/assets/images/products/veal-trimming.webp',
        width: 329,
        height: 259,
      },
    ],
  },
  {
    id: 'lamb-cuts',
    title: 'Lamb Cuts',
    eyebrow: 'Lamb',
    products: [
      {
        name: 'Leg',
        image: '/assets/images/products/lamb-leg.webp',
        width: 297,
        height: 171,
      },
      {
        name: 'Forequarter',
        image: '/assets/images/products/lamb-forequarter.webp',
        width: 237,
        height: 172,
      },
      {
        name: 'Standard Rack',
        image: '/assets/images/products/lamb-standard-rack.webp',
        width: 218,
        height: 172,
      },
      {
        name: 'French Rack',
        image: '/assets/images/products/lamb-french-rack.webp',
        width: 245,
        height: 171,
      },
      {
        name: 'Square Cut',
        image: '/assets/images/products/lamb-square-cut.webp',
        width: 202,
        height: 172,
      },
      {
        name: 'Short Loin',
        image: '/assets/images/products/lamb-short-loin.webp',
        width: 191,
        height: 171,
      },
      {
        name: 'Flap',
        image: '/assets/images/products/lamb-flap.webp',
        width: 177,
        height: 172,
      },
      {
        name: 'Neck',
        image: '/assets/images/products/lamb-neck.webp',
        width: 225,
        height: 171,
      },
      {
        name: 'Shin/Shank',
        image: '/assets/images/products/lamb-shin-shank.webp',
        width: 231,
        height: 172,
      },
      {
        name: 'Shoulder',
        image: '/assets/images/products/lamb-shoulder.webp',
        width: 295,
        height: 172,
      },
      {
        name: 'Tenderloin',
        image: '/assets/images/products/lamb-tenderloin.webp',
        width: 209,
        height: 172,
      },
      {
        name: '6 Way Cut',
        image: '/assets/images/products/lamb-6-way-cut.webp',
        width: 294,
        height: 176,
      },
      {
        name: 'Carcass',
        image: '/assets/images/products/lamb-carcass-cut.webp',
        width: 297,
        height: 167,
      },
    ],
  },
];

export const testimonial = {
  quote:
    'Being a distributor, I need a supplier I can rely on for quality and consistency. ZAC Meat & Food has been a game changer for my business. Their meat products meet the highest standards, and my clients love them. A BIG THUMBS UP!',
  author: 'Bilal H.',
  country: 'Pakistan',
} as const;

export const globalExpansion =
  'ZAC Meat & Food is rapidly expanding to international markets, focusing on exporting premium Halal meat to the Middle East, Europe, and South Asia. Our goal is to strengthen global partnerships and become a recognized leader in the Halal meat industry.';

export const expansionMarkets = ['Middle East', 'Europe', 'South Asia'] as const;
