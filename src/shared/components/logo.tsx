import { cn } from '@/shared/utils/string';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src="/images/logo-white.png"
      alt="logo"
      className={cn('h-10 w-auto md:h-16', className)}
    />
  );
};
