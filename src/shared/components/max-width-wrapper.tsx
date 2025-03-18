import { cn } from '@/shared/utils/string';

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1760px] px-4 lg:px-20', className)}
    >
      {children}
    </div>
  );
};
