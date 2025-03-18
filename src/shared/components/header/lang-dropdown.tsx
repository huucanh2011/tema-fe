'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { setUserLocale } from '@/shared/services/locale';
import { Locale } from '@/i18n/config';
import { langItems } from '@/config';
import { cn } from '@/shared/utils/string';

type LangDropdownProps = {
  isMobile?: boolean;
};

export const LangDropdown = ({ isMobile = false }: LangDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const t = useTranslations('header');
  const locale = useLocale();

  const onChange = (value: string) => {
    const locale = value as Locale;
    setUserLocale(locale);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={cn('flex h-10 items-center justify-center', {
            'w-20 rounded-lg border border-[#AFAFAF] bg-[#F6F6F6]': isMobile,
          })}
        >
          <div className="flex items-center gap-x-1">
            <img src={langItems[locale].icon} alt="flag" />
            <img
              src={`/icons/${isMobile ? 'ic-dropdown-black' : 'ic-dropdown'}.png`}
              alt="arrow"
            />
          </div>
        </button>
        {showDropdown && (
          <div
            className={cn('absolute top-12', isMobile ? 'left-0' : 'right-0')}
          >
            <div
              className={cn(
                'h-20 w-[156px] rounded-lg border bg-white p-2',
                isMobile ? 'border-[#AFAFAF]' : 'border-border',
              )}
            >
              {Object.keys(langItems).map((key) => (
                <button
                  key={key}
                  onClick={() => onChange(key)}
                  className="flex items-center justify-end gap-x-2"
                >
                  <div className="w-6">
                    {locale === key && (
                      <img src="/icons/ic-check.png" alt="check" />
                    )}
                  </div>
                  <img src={langItems[key].icon} alt="flag" />
                  <span className="text-10 font-bold text-black">
                    {t(langItems[key].label)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
