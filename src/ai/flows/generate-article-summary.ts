'use server';

/**
 * @fileOverview Generates a concise summary of a long bullfighting article.
 *
 * - generateArticleSummary - A function that generates the article summary.
 * - GenerateArticleSummaryInput - The input type for the generateArticleSummary function.
 * - GenerateArticleSummaryOutput - The return type for the generateArticleSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateArticleSummaryInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The full content of the bullfighting article to summarize.'),
});
export type GenerateArticleSummaryInput = z.infer<typeof GenerateArticleSummaryInputSchema>;

const GenerateArticleSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the bullfighting article.'),
});
export type GenerateArticleSummaryOutput = z.infer<typeof GenerateArticleSummaryOutputSchema>;

export async function generateArticleSummary(
  input: GenerateArticleSummaryInput
): Promise<GenerateArticleSummaryOutput> {
  return generateArticleSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticleSummaryPrompt',
  input: {schema: GenerateArticleSummaryInputSchema},
  output: {schema: GenerateArticleSummaryOutputSchema},
  prompt: `Summarize the following bullfighting article in a concise manner, highlighting the main points:\n\n{{{articleContent}}}`,
});

const generateArticleSummaryFlow = ai.defineFlow(
  {
    name: 'generateArticleSummaryFlow',
    inputSchema: GenerateArticleSummaryInputSchema,
    outputSchema: GenerateArticleSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
