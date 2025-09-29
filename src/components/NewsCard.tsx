import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImageById } from '@/lib/placeholder-images';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  const image = getImageById(article.imageId);

  return (
    <Link href={`/noticias/${article.slug}`} className="group block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
          <CardTitle className="font-headline text-xl leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{article.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
