export const siteConfig = {
  name: 'ZAC Meat & Food',
  title: 'ZAC Meat & Food | Halal Meat Manufacturer and Exporter',
  description:
    'ZAC Meat & Food provides fresh and frozen Halal beef, goat, lamb, camel, veal and related meat products for local and international markets.',
  url: 'https://example.com',
  lang: 'en',
  email: 'zacmeatandfood@gmail.com',
  address: 'Office 99 2nd Floor, Commercial Area Cavalry Ground Cantt, Lahore.',
  themeColor: '#12392a',
  socialImage: '/assets/images/social-share.jpg',
  contacts: [
    {
      role: 'CEO',
      name: 'Chaudhry Abdullah Mobeen',
      phone: '+92 311 6960669',
      phoneHref: 'tel:+923116960669',
    },
    {
      role: 'Director',
      name: 'Asad Ullah Afzal',
      phone: '+92 306 9627102',
      phoneHref: 'tel:+923069627102',
    },
    {
      role: 'Director',
      name: 'Niaz Ahmed Sial',
    },
  ],
} as const;

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Global Reach', href: '#global-reach' },
  { label: 'Contact', href: '#contact' },
] as const;
