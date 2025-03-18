import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/images/logo-white.png"
      alt="logo"
      width={110}
      height={64}
      priority
      className="h-10 w-auto md:h-16"
    />
  );
};
