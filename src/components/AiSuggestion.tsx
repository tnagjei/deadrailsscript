"use client";

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const AiSuggestion = () => {
  const [gameDescription, setGameDescription] = useState('');
  const [suggestedScripts, setSuggestedScripts] = useState<string[]>([]);

  const handleSuggestion = async () => {
    // Simulate AI suggestion logic (replace with actual AI integration)
    const suggestions = ['ExampleScript1', 'ExampleScript2', 'ExampleScript3'];
    setSuggestedScripts(suggestions);
  };

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          AI Script Suggestion
        </h2>
        <div className="flex flex-col items-center">
          <Textarea
            placeholder="Enter your game description"
            className="w-full max-w-lg mb-4"
            value={gameDescription}
            onChange={(e) => setGameDescription(e.target.value)}
          />
          <Button onClick={handleSuggestion}>Suggest Scripts</Button>
          {suggestedScripts.length > 0 && (
            <div className="mt-8 w-full max-w-lg">
              <h3 className="text-xl font-semibold mb-4">Suggested Scripts:</h3>
              <ul>
                {suggestedScripts.map((script, index) => (
                  <li key={index} className="mb-2">{script}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
