import { cn } from '@/shared/utils/string';
import { OurGamesItem } from '@/shared/types/types';

type GameItemProps = {
  gameItem: OurGamesItem;
  className?: string;
};

export const GameItem = ({ gameItem, className }: GameItemProps) => {
  return (
    <article
      className={cn('relative rounded-[20px] shadow-card-game', className)}
      key={gameItem.title}
    >
      <picture>
        <img
          src={gameItem.image}
          alt={gameItem.title}
          className="h-full w-full rounded-[20px] object-cover"
        />
      </picture>

      <div className="absolute bottom-3 w-full px-2 text-white md:bottom-5 md:space-y-2 md:px-4 xl:bottom-10 xl:space-y-4 xl:px-8">
        <p className="text-2xl font-bold leading-[30px] xl:text-5xl xl:leading-[60px]">
          {gameItem.title}
        </p>
        <p className="line-clamp-none text-xs leading-[15px] md:line-clamp-5 xl:line-clamp-none xl:text-sm">
          {gameItem.description}
        </p>
      </div>
    </article>
  );
};
