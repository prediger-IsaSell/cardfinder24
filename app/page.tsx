import { DeepLinkBanner } from '@/components/DeepLinkBanner';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
// import { BankWordmarks } from '@/components/BankWordmarks'; // → später aktivieren, sobald Financeads offizielle Bank-Logos freigibt
import { CardGrid } from '@/components/CardGrid';
import { TrustSection } from '@/components/TrustSection';
import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { ScrollFocus } from '@/components/ScrollFocus';

export default function HomePage() {
  return (
    <>
      <DeepLinkBanner />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          {/* <BankWordmarks />  ← „Antrag direkt bei …" Sektion, später mit offiziellen Logos aktivieren */}
          <CardGrid />
          <TrustSection />
          <About />
          <FAQ />
          <FinalCta />
        </main>
        <Footer />
      </div>
      <ScrollFocus />
    </>
  );
}
