import { OurGamesItem } from '@/config';
import { cn } from '@/shared/utils/string';

type GameItemProps = {
  gameItem: OurGamesItem;
  className?: string;
};

// TODO: Add shadow to the image

export const GameItem = ({ gameItem, className }: GameItemProps) => {
  return (
    <article
      className={cn('relative rounded-[20px] shadow-2xl', className)}
      key={gameItem.title}
    >
      <picture>
        <img
          src={gameItem.image}
          alt={gameItem.title}
          className="h-full w-full rounded-[20px] object-cover"
        />
      </picture>

      <div className="absolute bottom-3 w-full px-2 text-white md:bottom-10 md:space-y-4 md:px-8">
        <p className="text-2xl font-bold leading-[30px] md:text-5xl md:leading-[60px]">
          {gameItem.title}
        </p>
        <p className="text-xs leading-[15px] md:text-sm">
          {gameItem.description}
        </p>
      </div>
    </article>
  );
};
