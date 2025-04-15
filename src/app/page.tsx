
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { AiSuggestion } from '@/components/AiSuggestion';
import { Footer } from '@/components/Footer';
import { LanguageSelector } from '@/components/LanguageSelector';

export default function Home() {
  return (
    <>
      <header className="sticky top-0 bg-background z-50">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">DeadRails Script Hub</h1>
          <LanguageSelector />
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AiSuggestion />
      </main>
      <Footer />
    </>
  );
}

