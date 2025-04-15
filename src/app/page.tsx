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
  {
    name: "Tbao Hub",
    codeSnippet: 'loadstring(game:HttpGet("https://raw.githubusercontent...',
    fullCode: 'This is the full code for Tbao Hub'
  },
  {
    name: "SPEEDWAVE Ralis",
    codeSnippet: 'loadstring(game:HttpGet(("https://raw.githubuserco...',
    fullCode: 'This is the full code for SPEEDWAVE Ralis'
  },
  {
    name: "zenox | Airflow FIXED",
    codeSnippet: 'loadstring(game:HttpGet("https://api.luarmor.net/f...',
    fullCode: 'This is the full code for zenox | Airflow FIXED'
  },
  {
    name: "strelizia script hub",
    codeSnippet: 'loadstring(game:HttpGet("https://raw.githubusercon...',
    fullCode: 'This is the full code for strelizia script hub'
  },
  {
    name: "Sypher hub [Need Key]",
    codeSnippet: 'loadstring(game:HttpGet("https://raw.githubusercon...',
    fullCode: 'This is the full code for Sypher hub [Need Key]'
  },
    {
    "name": "Fluxteam",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Fluxteam.lua'))()",
    "fullCode": "This is the full code for Fluxteam"
  },
  {
    "name": "Evon Hub",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Evon%20Hub.lua'))()",
    "fullCode": "This is the full code for Evon Hub"
  },
  {
    "name": "Arceus X",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Arceus%20X.lua'))()",
    "fullCode": "This is the full code for Arceus X"
  },
  {
    "name": "Hydrogen Hub",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Hydrogen%20Hub.lua'))()",
    "fullCode": "This is the full code for Hydrogen Hub"
  },
  {
    "name": "Delta executor",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Delta%20executor.lua'))()",
    "fullCode": "This is the full code for Delta executor"
  },
  {
    "name": "JJSploit",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/JJSploit.lua'))()",
    "fullCode": "This is the full code for JJSploit"
  },
  {
    "name": "Krnl",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Krnl.lua'))()",
    "fullCode": "This is the full code for Krnl"
  },
  {
    "name": "Sirhurt",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Sirhurt.lua'))()",
    "fullCode": "This is the full code for Sirhurt"
  },
  {
    "name": "Synapse X",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Synapse%20X.lua'))()",
    "fullCode": "This is the full code for Synapse X"
  },
  {
    "name": "Zeus",
    "codeSnippet": "loadstring(game:HttpGet('https://raw.githubusercontent.com/Bebo1337/Roblox/main/Zeus.lua'))()",
    "fullCode": "This is the full code for Zeus"
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
             <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                {/* Add some text here if needed */}
              </p>
            </div>
          </div>
        </section>
         <section className="py-6 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
              How to Run Dead Rails Script (2025)
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow these detailed steps to properly execute Dead Rails script with minimal risk.
              以下按照详细步骤执行 Dead Rails 脚本以最大程度减少风险.
            </p>
          </div>
        </section>
        <section className="py-6 bg-background">
          <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">First: Choose a Reliable Executor</h3>
            <p className="text-muted-foreground">Select an executor based on your device:</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Windows users: Download an Android emulator like BlueStacks, then run Delta Executor below.</li>
              <li>Android users: For optimal performance, we recommend using Delta Executor directly on your device. Get it <a href="#" className="text-blue-500">here</a> (download link).</li>
              <li>iOS users: Native support for Delta Executor is currently in development. If it has some adventure in it, so please wait for the support from delta executor.</li>
            </ul>
          </div>
        </section>

        <section className="py-6 bg-background">
          <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Detailed Tutorial: Using Delta Executor with Dead Rails</h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 1: Launch Delta Executor and Join Dead Rails Game Server</h4>
              <p className="text-muted-foreground">Download and open Delta Executor from the official website. After launching it, open Roblox and join a Dead Rails game server. Waits into the game is fully loaded then proceeding to the next steps.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 2: Click Receive Key and Paste URL to your browser</h4>
              <p className="text-muted-foreground">In the Delta Executor interface, locate and click the "Receive Key" button. This will generate a URL. Copy the URL and paste it into your web browser to proceed with the key generation process.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 3: You will see the task that you will do</h4>
              <p className="text-muted-foreground">After opening the URL, you'll be directed to a page showing the tasks you need to complete to generate your key. These tasks typically involve watching ads or completing short surveys to support the developers.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 4: Over your task and Unlock Content</h4>
              <p className="text-muted-foreground">Complete all the required tasks shown on the page. Once you've finished each task, click the "Unlock Content" or similar button to proceed to the next step in the key generation process.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 5: Create your key</h4>
              <p className="text-muted-foreground">After completing all tasks, you'll reach the final page where you can generate your access key. Click the "Create key" or similar button, and your unique access key will be displayed. Make sure to copy the key as you'll need it in the next step.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 6: Paste your key to delta executor and continue</h4>
              <p className="text-muted-foreground">Return to the Delta Executor application. Locate the key input field and paste the key you copied in the previous step. Click "Continued" or "Verify Key" to proceed with the activation process.</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 7: See Delta executor Icon</h4>
              <p className="text-muted-foreground">Once your key is verified, Delta will inject into the Roblox game. Return to Dead Rails and look for the Delta Executor icon that appears in the game interface. This icon indicates that the executor is successfully attached and ready to use.</p>
            </div>

             <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 8: Click Icon</h4>
              <p className="text-muted-foreground">Click on the Delta Executor icon that appears in your game. This will open the script execution interface where you can paste and run scripts. The menu provides access to all of Delta's features and script options.</p>
            </div>

             <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 9: Upload the script from dead rails script</h4>
              <p className="text-muted-foreground">Copy one of the Dead Rails scripts from our website (the ones listed above). In the Delta script area, paste the script code you copied. Make sure the entire script is properly pasted without any missing characters.</p>
            </div>

             <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Step 10: Execute script and enjoy</h4>
              <p className="text-muted-foreground">Click the "Execute" button to run the script. After a moment, the script features will activate in your gameplay with features like ESP, auto-farming, and more. If you encounter any issues, try reattaching Delta or using a different script from our collection.</p>
            </div>
          </div>
        </section>

        <section className="py-6 bg-background">
          <div className="container mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Attention: Using Scripts Safely</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Avoid using obvious cheats in public servers with many players.</li>
              <li>Don't brag about using scripts in the game chat.</li>
              <li>Use features gradually rather than activating everything at once.</li>
              <li>If you encounter errors, try rejoining the game or reattaching your executor.</li>
            </ul>
          </div>
        </section>

        <section className="py-6 bg-background">
          <div className="container mx-auto">
            <p className="text-red-500 font-semibold">⚠️ Important Warning</p>
            <p className="text-muted-foreground">Using scripts violates Roblox Terms of Service and may result in temporary or permanent account bans. We provide these scripts for educational purposes only. Use at your own risk and preferably on alternative accounts.</p>
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




