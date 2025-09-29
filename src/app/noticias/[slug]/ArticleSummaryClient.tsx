'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateArticleSummary } from '@/ai/flows/generate-article-summary';
import { Wand2, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArticleSummaryClient({ articleContent }: { articleContent: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await generateArticleSummary({ articleContent });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        title: 'Error',
        description: 'No se pudo generar el resumen. Inténtalo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
        <Card className="bg-card/50 border-dashed">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                            <Wand2 className="h-6 w-6" />
                            Resumen con IA
                        </CardTitle>
                        <CardDescription className="mt-2">
                            ¿Poco tiempo? Genera un resumen del artículo utilizando inteligencia artificial.
                        </CardDescription>
                    </div>
                    <Button onClick={handleGenerateSummary} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generando...
                            </>
                        ) : (
                            'Generar Resumen'
                        )}
                    </Button>
                </div>
            </CardHeader>
            {(isLoading || summary) && (
                 <CardContent>
                    {isLoading && (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    )}
                    {summary && <p className="text-muted-foreground">{summary}</p>}
                </CardContent>
            )}
        </Card>
    </section>
  );
}
