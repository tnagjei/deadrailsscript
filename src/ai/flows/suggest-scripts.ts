'use server';
/**
 * @fileOverview Suggests DeadRails scripts based on a game description.
 *
 * - suggestScripts - A function that suggests relevant scripts.
 * - SuggestScriptsInput - The input type for the suggestScripts function.
 * - SuggestScriptsOutput - The return type for the suggestScripts function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuggestScriptsInputSchema = z.object({
  gameDescription: z.string().describe('A description of the DeadRails game idea.'),
});
export type SuggestScriptsInput = z.infer<typeof SuggestScriptsInputSchema>;

const SuggestScriptsOutputSchema = z.object({
  suggestedScripts: z.array(z.string()).describe('An array of suggested DeadRails scripts.'),
});
export type SuggestScriptsOutput = z.infer<typeof SuggestScriptsOutputSchema>;

export async function suggestScripts(input: SuggestScriptsInput): Promise<SuggestScriptsOutput> {
  return suggestScriptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestScriptsPrompt',
  input: {
    schema: z.object({
      gameDescription: z.string().describe('A description of the DeadRails game idea.'),
    }),
  },
  output: {
    schema: z.object({
      suggestedScripts: z.array(z.string()).describe('An array of suggested DeadRails scripts.'),
    }),
  },
  prompt: `You are an expert in DeadRails game scripts. Based on the following game description, suggest relevant scripts from the hub.\n\nGame Description: {{{gameDescription}}}\n\nSuggested Scripts:`, // Keep newlines, as they are semantically meaningful in prompts.
});

const suggestScriptsFlow = ai.defineFlow<
  typeof SuggestScriptsInputSchema,
  typeof SuggestScriptsOutputSchema
>(
  {
    name: 'suggestScriptsFlow',
    inputSchema: SuggestScriptsInputSchema,
    outputSchema: SuggestScriptsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
