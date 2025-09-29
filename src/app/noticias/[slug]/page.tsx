import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug } from '@/lib/data';
import { getImageById } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { SocialShare } from '@/components/SocialShare';
import { Separator } from '@/components/ui/separator';
import ArticleSummaryClient from './ArticleSummaryClient';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const image = getImageById(article.imageId);

  return (
    <article className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
      <header className="mb-8">
        <div className="mb-4">
          <Badge variant="destructive" className="bg-primary">{article.category}</Badge>
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4">
          {article.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(article.publishedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        
        {image && (
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={image.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto"
        style={{
            // @ts-ignore
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-headings': 'hsl(var(--primary))',
            '--tw-prose-lead': 'hsl(var(--foreground))',
            '--tw-prose-links': 'hsl(var(--primary))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-counters': 'hsl(var(--muted-foreground))',
            '--tw-prose-bullets': 'hsl(var(--primary))',
            '--tw-prose-hr': 'hsl(var(--border))',
            '--tw-prose-quotes': 'hsl(var(--foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--primary))',
        }}
       dangerouslySetInnerHTML={{ __html: article.content }} />
      
      <Separator className="my-8" />
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <SocialShare title={article.title} />
      </div>

      <Separator className="my-8" />

      <ArticleSummaryClient articleContent={article.content} />

    </article>
  );
}
