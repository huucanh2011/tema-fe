export type MenuItem = {
  label: string;
  href: string;
};

export type LangItem = {
  [key: string]: {
    label: string;
    icon: string;
  };
};

export type AboutUsItem = {
  icon: string;
  title: string;
  description: string;
};

export type OurGamesItem = {
  title: string;
  description: string;
  image: string;
};
