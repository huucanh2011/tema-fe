import { AboutUs } from '@/shared/components/landing/about-us';
import { Banner } from '@/shared/components/landing/banner';
import { OurGames } from '@/shared/components/landing/our-games';
import { OurPartners } from '@/shared/components/landing/our-partners';

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurGames />
      <OurPartners />
    </>
  );
}
