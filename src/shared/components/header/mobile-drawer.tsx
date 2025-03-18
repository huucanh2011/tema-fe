import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/utils/string';
import { menuItems } from '@/config';
import { LangDropdown } from './lang-dropdown';

export const MobileDrawer = () => {
  const t = useTranslations('header');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div className="block md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <img src="/icons/ic-menu.png" alt="menu" width={30} height={30} />
        </button>
      </div>

      <div
        className={cn(
          'fixed left-0 top-0 z-20 h-full w-full bg-white px-4 py-1 transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-10 items-center justify-between">
          <LangDropdown isMobile />

          <button
            onClick={() => setIsOpen(false)}
            className="flex size-10 items-center justify-center"
          >
            <img src="/icons/ic-close.png" alt="close" width={30} height={30} />
          </button>
        </div>

        <nav className="mt-4 w-full">
          <ul className="flex flex-col divide-y">
            {menuItems.map((menu) => (
              <li key={menu.href} className="w-full py-6">
                <Link
                  href={menu.href}
                  className="flex items-center justify-center text-sm font-bold uppercase"
                >
                  {t(menu.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
