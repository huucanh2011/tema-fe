import { useState } from 'react';

import { cn } from '@/shared/utils/string';

export const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="block md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <img src="/icons/ic-menu.png" alt="menu" />
        </button>
      </div>

      <div
        className={cn(
          'fixed left-0 top-0 z-20 h-full w-full bg-white transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="px-4 py-1">
          <div className="flex h-10 items-center justify-between">
            <div></div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex size-10 items-center justify-center"
            >
              <img
                src="/icons/ic-close.png"
                alt="close"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
