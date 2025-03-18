import { useTranslations } from 'next-intl';

export const AboutUs = () => {
  const t = useTranslations('about-us');

  return (
    <section id="about-us">
      <div className="mx-auto mt-[380px] max-w-[1160px] md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {/* About us */}
          <div className="col-span-1 space-y-10 px-4 md:space-y-[80px] md:px-0">
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

          <div className="bg-[#EEEEEE]">
            <div className="px-4 py-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
