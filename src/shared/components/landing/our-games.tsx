import { useTranslations } from 'next-intl';

import { ourGamesItems } from '@/config';
import { GameItem } from '../game-item';
import { cn } from '@/shared/utils/string';

export const OurGames = () => {
  const t = useTranslations('our-games');

  return (
    <section id="our-games">
      <div className="mx-auto mt-10 px-4 md:px-20">
        <div className="mx-auto max-w-[860px] space-y-4 text-center md:space-y-6">
          <div className="h-[60px]">
            <h2 className="font-playfair text-[40px] font-black leading-[50px] md:text-[60px] md:leading-[60px]">
              {t('title')}
            </h2>
          </div>
          <p className="text-sm text-[#757575]">{t('description')}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-10">
          <div className="col-span-1">
            <div className="grid grid-flow-row grid-cols-1 grid-rows-6 gap-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-10">
              {ourGamesItems
                .slice(0, ourGamesItems.length / 2)
                .map((gameItem, index) => (
                  <GameItem
                    key={gameItem.title}
                    gameItem={gameItem}
                    className={
                      index > 2 ? 'translate-y-0 md:translate-y-[118px]' : ''
                    }
                  />
                ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-flow-row grid-cols-1 grid-rows-6 gap-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-10">
              {ourGamesItems
                .slice(ourGamesItems.length / 2, ourGamesItems.length)
                .map((gameItem, index) => (
                  <GameItem
                    key={gameItem.title}
                    gameItem={gameItem}
                    className={cn(
                      'translate-y-9 md:translate-y-0',
                      index > 2 ? 'translate-y-9 md:translate-y-[118px]' : '',
                    )}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
