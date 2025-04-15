
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
        <section className="py-6 bg-background">
          <div className="container mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Explore a vast collection of DeadRails scripts to enhance your game development.
              Find inspiration, save time, and bring your game ideas to life with our curated script hub.
            </p>
          </div>
        </section>
        <Features />
        <HowItWorks />
        <AiSuggestion />
      </main>
      <Footer />
    </>
  );
}
