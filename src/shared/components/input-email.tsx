import { useTranslations } from 'next-intl';

import { cn } from '@/shared/utils/string';

type InputEmailProps = {
  className?: string;
  isTransparent?: boolean;
};

export const InputEmail = ({
  className,
  isTransparent = false,
}: InputEmailProps) => {
  const t = useTranslations('form.email');

  return (
    <div className="relative">
      <input
        type="email"
        placeholder={t('placeholder')}
        className={cn(
          'h-14 rounded-lg bg-white py-[18px] pl-[14px] pr-[50px] text-sm',
          isTransparent && 'border border-white bg-transparent',
          className,
        )}
      />
      <button className="absolute right-[14px] top-1/2 size-6 -translate-y-1/2">
        <img
          src={
            isTransparent
              ? '/icons/ic-arrow-right-white.png'
              : '/icons/ic-arrow-right.png'
          }
          alt="arrow-right"
        />
      </button>
    </div>
  );
};
