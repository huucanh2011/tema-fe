import { useTranslations } from 'next-intl';

import { Logo } from '@/shared/components/logo';
import { InputEmail } from '@/shared/components/input-email';
import { socialItems } from '@/config';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer id="contact-us">
      <div className="min-h-[466px] w-full bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat text-white">
        <div className="mx-auto grid max-w-[1460px] grid-cols-1 gap-y-[68px] px-4 pb-16 pt-10 md:gap-x-8 md:pb-[100px] md:pt-[104px] lg:grid-cols-3 xl:gap-x-10">
          {/* Logo and social links */}
          <div className="col-span-1">
            <div className="flex flex-col items-center gap-y-10 xl:items-start">
              <Logo className="h-24 w-auto max-w-[164px] md:max-w-[168px]" />
              <div className="flex items-center gap-x-6">
                {socialItems.map((item) => (
                  <img key={item} src={item} alt={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Address and phone */}
          <div className="col-span-1 space-y-5 md:space-y-10">
            <p className="text-2xl font-bold leading-[30px]">{t('address')}</p>

            <div className="flex items-start gap-x-2">
              <img src="/icons/ic-location.png" alt="location" />
              <div className="space-y-3">
                <p className="text-sm">{t('address_line1')}</p>
                <p className="text-sm">{t('address_line2')}</p>
              </div>
            </div>

            <div className="flex items-start gap-x-2">
              <img src="/icons/ic-phone.png" alt="location" />
              <p>(+1) 555-0108-000 {t('or')} (+236) 555-0108</p>
            </div>
          </div>

          {/* Subscribe form */}
          <div className="col-span-1">
            <p className="mb-5 text-2xl font-bold leading-[30px] md:mb-10">
              {t('subscribe')}
            </p>

            <p className="mb-[17px] text-sm md:mb-3">
              {t('subscribe_description')}
            </p>

            <form>
              <InputEmail isTransparent className="w-full" />
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex h-[86px] items-center justify-center bg-black md:h-20">
        <p className="text-lg text-white">{t('copyright')}</p>
      </div>
    </footer>
  );
};
