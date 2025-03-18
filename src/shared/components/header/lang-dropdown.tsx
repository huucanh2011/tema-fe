'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { setUserLocale } from '@/shared/services/locale';
import { Locale } from '@/i18n/config';
import { langItems } from '@/config';

export const LangDropdown = () => {
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
      <li className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex h-10 items-center gap-x-1"
        >
          <img src={langItems[locale].icon} alt="flag" />
          <img src="/icons/ic-dropdown.png" alt="arrow" />
        </button>
        {showDropdown && (
          <div className="absolute right-0 top-10">
            <div className="h-20 w-[156px] rounded-lg border-border bg-white p-2">
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
      </li>
    </>
  );
};
