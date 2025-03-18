'use client';

import { useCountdown } from '@/shared/hooks/use-countdown';
import { useTranslations } from 'next-intl';
import Balancer from 'react-wrap-balancer';
import { InputEmail } from '../ui/input';

export const Banner = () => {
  const t = useTranslations('banner');
  const { days, hours, minutes, seconds } = useCountdown('2025-04-30');

  return (
    <section className="relative h-screen max-h-[608px] w-full bg-[url('/images/banner-sp.png')] bg-cover bg-bottom bg-no-repeat md:max-h-[998px] md:bg-[url('/images/banner-pc.png')]">
      <div className="mx-auto max-h-[656px] px-4 pt-[68px] md:max-w-[860px] md:pt-[132px]">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <h1 className="mb-[38px] mt-6 text-center font-playfair text-[40px] font-black leading-[50px] text-white md:mb-[21px] md:text-[80px] md:leading-[120px]">
            <Balancer>
              <span className="hidden md:block">{t('title')}</span>
              <span
                className="block md:hidden"
                dangerouslySetInnerHTML={{ __html: t('titleHtml') }}
              />
            </Balancer>
          </h1>

          {/* Countdown */}
          <div className="mb-10 flex h-[118px] w-full max-w-[756px] items-center justify-evenly rounded-[21px] bg-white px-[26px] py-6 md:mb-[97px] md:h-[150px]">
            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {days}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('days')}</p>
              </div>
            </div>

            <span className="text-[40px] md:text-[65px]">:</span>

            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {hours}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('hours')}</p>
              </div>
            </div>

            <span className="text-[40px] md:text-[65px]">:</span>

            <div className="flex w-[54px] flex-col items-center justify-center gap-2.5">
              <p className="font-playfair text-4xl font-black md:text-6xl md:leading-[64px]">
                {minutes}
              </p>
              <div className="h-[18px]">
                <p className="text-xs font-bold md:text-base">{t('minutes')}</p>
              </div>
            </div>

            <span className="text-[40px] md:text-[65px]">:</span>

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
