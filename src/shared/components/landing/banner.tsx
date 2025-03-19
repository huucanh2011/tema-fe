'use client';

import { useTranslations } from 'next-intl';

import { useCountdown } from '@/shared/hooks/use-countdown';
import { InputEmail } from '@/shared/components/input-email';

export const Banner = () => {
  const t = useTranslations('banner');
  const { days, hours, minutes, seconds } = useCountdown('2025-04-30');

  return (
    <section className="relative h-screen max-h-[608px] w-full bg-[url('/images/banner-sp.png')] bg-cover bg-bottom bg-no-repeat md:max-h-[998px] md:bg-[url('/images/banner-pc.png')]">
      <div className="mx-auto max-h-[656px] px-4 pt-[68px] md:max-w-[860px] md:pt-[132px]">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <h1 className="mb-[38px] mt-6 text-center font-playfair text-40 font-black leading-[50px] text-white md:mb-[21px] md:text-80 md:leading-[120px]">
            <span className="hidden md:block">{t('title')}</span>
            <span
              className="block md:hidden"
              dangerouslySetInnerHTML={{ __html: t('title_html') }}
            />
          </h1>

          {/* Countdown */}
          <div className="mb-10 flex h-[118px] w-full max-w-[756px] items-center justify-evenly rounded-[21px] bg-white px-[26px] py-6 md:mb-16 md:h-[150px] xl:mb-[97px]">
            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {days}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('days')}</p>
              </div>
            </div>

            <span className="text-40 md:text-65">:</span>

            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {hours}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('hours')}</p>
              </div>
            </div>

            <span className="text-40 md:text-65">:</span>

            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {minutes}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('minutes')}</p>
              </div>
            </div>

            <span className="text-40 md:text-65">:</span>

            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {seconds}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('seconds')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:max-w-[560px] md:space-y-8">
            <p className="text-center text-xs leading-[15px] text-white md:text-lg">
              {t('description')}
            </p>

            <form>
              <InputEmail className="w-full" />
            </form>
          </div>
        </div>
      </div>
      <div className="block translate-y-16 md:hidden">
        <img src="/images/witch-man.png" alt="witch man" />
      </div>
    </section>
  );
};
