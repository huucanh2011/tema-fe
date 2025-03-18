import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MaxWidthWrapper } from '@/shared/components/max-width-wrapper';
import { menuItems } from '@/config';
import { LangDropdown } from './lang-dropdown';
import { MobileDrawer } from './mobile-drawer';
import { Logo } from '../logo';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="fixed inset-x-0 top-0 z-20 flex w-full items-center">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between pb-6 pt-1 md:py-5">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden h-10 grow font-mont font-bold uppercase text-white md:flex">
            <ul className="flex grow flex-wrap items-center justify-end md:gap-x-14 lg:gap-x-[84px]">
              {menuItems.map((menu) => (
                <li key={menu.href}>
                  <Link href={menu.href}>{t(menu.label)}</Link>
                </li>
              ))}

              <LangDropdown />
            </ul>
          </nav>

          {/* Mobile Drawer */}
          <MobileDrawer />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
