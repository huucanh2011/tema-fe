import { useTranslations } from 'next-intl';

import { aboutUsItems } from '@/config';

export const AboutUs = () => {
  const t = useTranslations('about-us');

  return (
    <section id="about-us">
      <div className="mx-auto mt-[380px] max-w-[1160px] px-4 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {/* About us */}
          <div className="col-span-1 space-y-10 md:space-y-[80px] md:px-0">
            <div>
              <h2 className="mb-4 font-playfair text-[40px] font-black leading-[50px] md:mb-10 md:text-6xl md:leading-[60px]">
                {t('title')}
              </h2>
              <p className="font-mont text-sm text-[#757575]">
                {t('description')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-1 md:gap-10">
              <div className="col-span-1">
                <div className="space-y-1">
                  <p className="text-[44px] font-bold text-[#079BEE] md:text-[80px]">
                    600
                    <span className="text-xl md:text-[40px]">
                      {t('million')}
                    </span>
                    <span className="text-4xl md:text-[80px]">+</span>
                  </p>
                  <p className="text-2xl font-bold leading-[30px]">
                    {t('users')}
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="space-y-1">
                  <p className="text-[44px] font-bold text-[#079BEE] md:text-[80px]">
                    135<span className="text-4xl md:text-[80px]">+</span>
                  </p>
                  <p className="text-2xl font-bold leading-[30px]">
                    {t('games')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About us items */}
          <div className="-mx-4 bg-[#EEEEEE] md:mx-0">
            <div className="space-y-10 px-4 py-10 md:px-[75px] md:py-[113px]">
              {aboutUsItems.map((item) => (
                <div key={item.title} className="flex items-start gap-x-5">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="size-10 md:size-[50px]"
                  />
                  <div className="space-y-3 md:space-y-2">
                    <p className="text-2xl font-bold leading-[30px]">
                      {t(item.title)}
                    </p>
                    <p className="text-sm text-[#757575]">
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative pt-[260px] md:pt-[404px]">
          <div className="absolute left-1/2 top-10 -translate-x-1/2">
            <img
              src="/images/witch.png"
              alt="witch"
              className="h-auto max-w-[300px] animate-pulse md:max-w-[533px]"
            />
          </div>
          <div className="w-full">
            <img src="/images/map.png" alt="map" />
          </div>
        </div>
      </div>
    </section>
  );
};
