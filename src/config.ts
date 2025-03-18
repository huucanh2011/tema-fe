type MenuItem = {
  label: string;
  href: string;
};

export const menuItems: MenuItem[] = [
  {
    label: 'about_us',
    href: '#about-us',
  },
  {
    label: 'games',
    href: '#games',
  },
  {
    label: 'partners',
    href: '#partners',
  },
  {
    label: 'contact_us',
    href: '#contact-us',
  },
];

type LangItem = {
  [key: string]: {
    label: string;
    icon: string;
  };
};

export const langItems: LangItem = {
  vi: {
    label: 'vietnamese',
    icon: '/icons/ic-flg-vi.png',
  },
  en: {
    label: 'english',
    icon: '/icons/ic-flg-en.png',
  },
};
