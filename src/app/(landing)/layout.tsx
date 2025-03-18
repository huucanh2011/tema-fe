'use client';

import { useEffect } from 'react';

import AOS from 'aos';

import { Header } from '@/shared/components/header';
import { Footer } from '@/shared/components/footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
