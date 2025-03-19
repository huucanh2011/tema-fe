import {
  AboutUsItem,
  LangItem,
  MenuItem,
  OurGamesItem,
} from './shared/types/types';

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

export const aboutUsItems: AboutUsItem[] = [
  {
    icon: '/icons/ic-calendar.png',
    title: 'hours',
    description: 'hours_description',
  },
  {
    icon: '/icons/ic-design.png',
    title: 'design',
    description: 'design_description',
  },
  {
    icon: '/icons/ic-team.png',
    title: 'team',
    description: 'team_description',
  },
];

export const ourGamesItems: OurGamesItem[] = [
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/e-space.png',
  },
  {
    title: 'Pirates',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/pirates.png',
  },
  {
    title: 'Magic tree',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/magic-tree.png',
  },
  {
    title: 'Kingland',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/kingland.png',
  },
  {
    title: 'Witch Party',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/witch-party.png',
  },
  {
    title: 'Aborigines',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/aborigines.png',
  },
  {
    title: 'The Last Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/the-last-game.png',
  },
  {
    title: 'Rocky',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/rocky.png',
  },
  {
    title: 'Cinderella',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/cinderella.png',
  },
  {
    title: 'G-Dragon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/g-dragon.png',
  },
  {
    title: 'Blue Fire',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/blue-fire.png',
  },
  {
    title: 'Egypt Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/games/egypt-game.png',
  },
];

export const ourPartnersItems: string[] = [
  '/images/partners/ea.png',
  '/images/partners/game.png',
  '/images/partners/power-up.png',
  '/images/partners/disney.png',
  '/images/partners/book-pro.png',
  '/images/partners/sega.png',
  '/images/partners/2k.png',
];

export const socialItems: string[] = [
  '/icons/ic-twitter.png',
  '/icons/ic-facebook.png',
  '/icons/ic-linkedin.png',
];
