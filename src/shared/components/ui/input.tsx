import { cn } from '@/shared/utils/string';
import { useTranslations } from 'next-intl';

type InputEmailProps = {
  className?: string;
};

export const InputEmail = ({ className }: InputEmailProps) => {
  const t = useTranslations('form.email');

  return (
    <div className="relative">
      <input
        type="email"
        placeholder={t('placeholder')}
        className={cn(
          'h-14 rounded-lg bg-white py-[18px] pl-[14px] pr-[50px]',
          className,
        )}
      />
      <button className="absolute right-[14px] top-1/2 size-6 -translate-y-1/2">
        <img src="/icons/ic-arrow-right.png" alt="arrow-right" />
      </button>
    </div>
  );
};
