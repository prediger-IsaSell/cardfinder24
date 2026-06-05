import { DeepLinkBanner } from '@/components/DeepLinkBanner';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CardGrid } from '@/components/CardGrid';
import { TrustSection } from '@/components/TrustSection';
import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <DeepLinkBanner />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <CardGrid />
          <TrustSection />
          <About />
          <FAQ />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
