import { useTranslations } from 'next-intl';

import { ourPartnersItems } from '@/config';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/carousel';

export const OurPartners = () => {
  const t = useTranslations('our-partners');

  return (
    <section id="partners">
      <div className="space-y-10 bg-light-gray py-10 md:space-y-20 md:py-[120px]">
        <div className="px-4 text-center">
          <h2 className="font-playfair text-40 font-black leading-[50px] md:text-[60px] md:leading-[80px]">
            {t('title')}
          </h2>
        </div>

        <div className="mx-auto md:max-w-[1460px]">
          <Carousel opts={{ align: 'center', loop: true }} className="w-full">
            <CarouselContent className="-ml-3 xl:-ml-10">
              {ourPartnersItems.map((item) => (
                <CarouselItem
                  key={item}
                  className="basis-2/4 pl-3 md:basis-1/3 xl:basis-1/5 xl:pl-10"
                >
                  <div className="flex h-full max-h-[100px] items-center justify-center">
                    <img
                      src={item}
                      alt={item}
                      className="h-full object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-0 lg:left-0 xl:left-0 2xl:-left-10" />
            <CarouselNext className="right-4 md:right-0 lg:right-0 xl:right-0 2xl:-right-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
