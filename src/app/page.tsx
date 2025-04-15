'use client';

import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { AiSuggestion } from '@/components/AiSuggestion';
import { Footer } from '@/components/Footer';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const scriptList = [
  {
    name: "KILL ALL AUTOFARM AIMBOT ESP AND MUCH MOREE MOBILE AND PC",
    codeSnippet: 'loadstring(game:HttpGet("https://api.luarmor.net/f...',
    fullCode: 'This is the full code for KILL ALL AUTOFARM AIMBOT ESP AND MUCH MOREE MOBILE AND PC'
  },
  {
    name: "Dark X Hub",
    codeSnippet: 'loadstring(game:HttpGet("https://raw.githubusercontent...',
    fullCode: 'This is the full code for Dark X Hub'
  },
  {
    name: "SpineWare",
    codeSnippet: 'loadstring(game:HttpGet("https://raw.githubusercontent...',
    fullCode: 'This is the full code for SpineWare'
  },
  {
    name: "Best script op",
    codeSnippet: 'loadstring(game:HttpGet("https://api.luarmor.net/f...',
    fullCode: 'This is the full code for Best script op'
  },
    {
    name: "Dead Rails Script SpeedHubX - Auto Bond, Auto Finish Game, ESP",
    codeSnippet: 'loadstring(game:HttpGet("https://raw.githubusercon...',
    fullCode: 'This is the full code for Dead Rails Script SpeedHubX - Auto Bond, Auto Finish Game, ESP'
  },
];

const ScriptItem = ({ name, codeSnippet, fullCode }: { name: string; codeSnippet: string; fullCode: string }) => {
  const [showFullCode, setShowFullCode] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <div className="bg-gray-700 rounded-md p-2 mt-2">
        <p className="text-sm text-gray-300">{codeSnippet}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button className="text-sm text-blue-500" onClick={() => setShowFullCode(!showFullCode)}>
          {showFullCode ? "Hide Full Code" : "Show Full Code"}
        </button>
        <Button size="sm" variant="secondary">
          Copy &amp; Tutorial <Copy className="ml-2 h-4 w-4" />
        </Button>
      </div>
      {showFullCode && (
        <div className="bg-gray-700 rounded-md p-2 mt-2">
          <p className="text-xs text-gray-200">{fullCode}</p>
        </div>
      )}
    </div>
  );
};

const ScriptsList = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
          All Dead Rails Script List (2025)
        </h2>
        {scriptList.map((script, index) => (
          <ScriptItem key={index} name={script.name} codeSnippet={script.codeSnippet} fullCode={script.fullCode} />
        ))}
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <>
      <header className="sticky top-0 bg-background z-50">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">DeadRails Script Hub</h1>
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
        <ScriptsList />
        <Features />
        <HowItWorks />
        <AiSuggestion />
      </main>
      <Footer />
    </>
  );
}
